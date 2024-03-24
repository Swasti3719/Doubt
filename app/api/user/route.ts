import { NextRequest , NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client' ;
const client = new PrismaClient() ;



export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body.username) ;

    // should add zod validation here
    try{
        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });    
        console.log(user.id);
    }
    catch(err){
        console.log(err) ;
    }
    

    return NextResponse.json({ message: "Signed up" });
}

export async function GET(){
    return NextResponse.json({
        name : "SwastiDon" ,
        email : "swasti@gmail.com"
    })
}