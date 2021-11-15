import { Query } from "./index";
import type { TChirps, TUsers} from "../models"

const all = async () => Query("SELECT * FROM chirps JOIN users on users.id=chirps.userid");

const singleChirp = async (chirpid: number) => 
Query(`SELECT 
 users.name,
 chirps.*
 FROM chirps
 JOIN users ON users.id = chirps.userid
 WHERE chirps.id = ?`,
 [chirpid]);

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
