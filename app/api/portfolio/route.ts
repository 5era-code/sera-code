import {portfolio} from './data';
export async function GET() {
    return Response.json(portfolio);
}