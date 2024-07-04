import { NextResponse, NextRequest } from "next/server";

import fs from 'fs';
import path from 'path';

export async function GET() {
    try{
        const data = await getText()
        return NextResponse.json({ chunk: data}, { status: 201, headers: { 'Cache-Control': 'no-cache' } });
    }catch(err){
        console.error("Failed to get text", err);
        return NextResponse.json({ message: "Failed to get text", error: err}, { status: 500 });
    }
}

function getText() {
  //const filePath = path.join(process.cwd(), '\src\app\output.txt');
  //const filePath = "C:\Users\rohan\ml\gpt_from_scratch_website\gpt_from_scratch_website\src\app\output.txt"
  const filePath = path.join(process.cwd(), 'src/app/api/output.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileLength = fileContent.length;

  // Get a random starting point
  const start = Math.floor(Math.random() * (fileLength - 800));
  console.log(`Random start point: ${start}`);
  const chunk = fileContent.substring(start, start + 800);

  return chunk

  //res.status(200).json({ chunk });
}
