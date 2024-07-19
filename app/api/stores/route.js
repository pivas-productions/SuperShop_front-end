import { stores } from '@/data/stores'; // Импортируйте данные из вашей базы данных или другого источника
import { NextResponse } from "next/server";

// export default function handler(req, res) {
//   res.status(200).json(stores);
// }
export async function GET(req, res) {
    res.statusCode = 200
    return NextResponse.json(stores)

}