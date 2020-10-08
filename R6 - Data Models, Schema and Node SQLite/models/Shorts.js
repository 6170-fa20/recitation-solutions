const db = require('../db/db_config');

/**
 * @typeof Short
 * 
 * @prop {string} name - some string, valid in a URL path
 * @prop {string} url - link to an external source
 * @prop {number} creatorID - id associated with creator
 */

/**
 * @class Shorts
 * 
 * Stores all Shorts.
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Shorts {
  /**
   * Add a Short.
   * 
   * @param {string} name - Short name
   * @param {string} url - Short url
   * @param {number} creatorID - Short creator id
   * @return {Short} - created short
   */
  static async addOne(name, url, creatorID) {
    // first insert the short into the DB and wait for completion
    // and then fetch the new short from the DB
    return db.run(`INSERT INTO shorts VALUES ('${name}', '${url}', ${creatorID})`)
              .then(() => {
                return Shorts.findOne(name);
              });
  }

  /**
   * Find a Short by Name.
   * 
   * @param {string} name - name of Short to find
   * @return {Short | undefined} - found Short
   */
  static async findOne(name) {
    return db.get(`SELECT * FROM shorts WHERE ${db.columnNames.shortName} = '${name}'`);
  }

  /**
   * Return an array of all of the Shorts.
   * 
   * @return {Short[]}
   */
  static async findAll() {
    return db.all(`SELECT * FROM shorts`);
  }

  /**
   * Update a Short.
   * 
   * @param {string} name - name of Short to update
   * @param {string} url - new URL
   * @return {Short | undefined} - updated Short
   */
  static async updateOne(name, url) {
    // first update the short and wait for completion
    // then fetch the updated short
    return db.run(`UPDATE shorts 
        SET ${db.columnNames.shortURL} = '${url}' 
        WHERE ${db.columnNames.shortName} = '${name}'`)
        .then( () => {
          return Shorts.findOne(name);
        });
  }

  /**
   * Delete a Short.
   * 
   * @param {string} name - name of Short to delete
   * @return {Short | undefined} - deleted Short
   */
  static async deleteOne(name) {
    // first fetch the short from the DB
    // and then delete it form the DB, waiting for completion
    return Shorts.findOne(name)
          .then( (short) => {
            db.run(`DELETE FROM shorts WHERE ${db.columnNames.shortName} = '${name}'`);
            return short;
          });
  }
}

module.exports = Shorts;
