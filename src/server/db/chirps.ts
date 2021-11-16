import { Query } from "./index";

const all = async () => Query("SELECT chirps.id, chirps.content, chirps.location, chirps._created, users.name FROM chirps JOIN users on users.id=chirps.userid");


const singleChirp = async (chirpid: number) => Query(`select chirps.id, chirps.content, chirps.location, chirps._created, users.name from chirps join users on users.id = chirps.userid where chirps.id = ?`, [chirpid])


const insert = (chirp: any) => Query("INSERT INTO chirps SET ?", chirp)

const update = (updatedChirp: any, chirpid: number) => Query("UPDATE chirps SET ? WHERE id=?", [updatedChirp, chirpid])

const remove = (chripid: number) => Query("DELETE FROM chirps where id = ?", [chripid])

export default {
  all,
  singleChirp,
  insert,
  update,
  remove
}
