const db = require('../../database');

class ContactsRepository {
  async findAll() {
    const rows = await db.query(`SELECT id, name, email, phone, TO_CHAR(date_birthday, 'DD/MM/YYYY'), image
    FROM mycontact ORDER BY name ASC`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`SELECT id, name, email, phone, TO_CHAR(date_birthday, 'DD/MM/YYYY'), image
    FROM mycontact WHERE id = $1`, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`SELECT id, name, email, phone, TO_CHAR(date_birthday, 'DD/MM/YYYY'), image
    FROM mycontact WHERE email = $1`, [email]);
    return row;
  }

  async create({
    name, email, phone, date_birthday, image,
  }) {
    const [row] = await db.query(`
    INSERT INTO mycontact(name, email, phone, date_birthday, image)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *
    `, [name, email, phone, date_birthday, image]);
    return row;
  }

  async update(
    id,
    name,
    email,
    phone,
    date_birthday,
    image,
  ) {
    const [row] = await db.query(`
      UPDATE mycontact
      SET name = $1, email = $2, phone = $3, date_birthday = $4, image = $5
      WHERE id = $6
      RETURNING *
    `, [name, email, phone, date_birthday, image, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM mycontact
      WHERE id = $1
    `, [id]);
    return deleteOp;
  }
}

module.exports = new ContactsRepository();
