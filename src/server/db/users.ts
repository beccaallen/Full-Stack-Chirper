import { Query } from "./index";

const all = async () => Query('SELECT id, name, email FROM users');
// const all = async () => Query('select * from chirps join users on users.id = chirps.userid')
const singleUser= async (userid: number) => Query('SELECT id FROM users WHERE id = ?', [userid])



export default {
  all,
  singleUser
}

