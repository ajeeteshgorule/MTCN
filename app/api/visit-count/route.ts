import { promises as fs } from "fs"
import path from "path"

const countFilePath = path.join(process.cwd(), "public", "visit-count.txt")

export async function GET() {
  try {
    let count = 0
    try {
      const data = await fs.readFile(countFilePath, "utf8")
      count = parseInt(data, 10)
    } catch (error: any) {
      if (error.code === "ENOENT") {
        // File does not exist, initialize count to 0 and attempt to create it
        count = 0;
        try {
          await fs.writeFile(countFilePath, count.toString(), "utf8");
          console.log("visit-count.txt created successfully with initial count 0.");
        } catch (writeError: any) {
          console.error("Error creating visit-count.txt:", writeError);
          return new Response(JSON.stringify({ error: `Failed to create initial visit count file: ${writeError.message}` }), { status: 500 });
        }
      } else {
        console.error("Error reading visit count file:", error)
        return new Response(JSON.stringify({ error: `Failed to read visit count: ${error.message}` }), { status: 500 })
      }
    }

    count += 1
    await fs.writeFile(countFilePath, count.toString(), "utf8")

    return new Response(JSON.stringify({ count }), { status: 200 })
  } catch (error: any) {
    console.error("Error in GET /api/visit-count:", error)
    return new Response(JSON.stringify({ error: `Internal server error: ${error.message}` }), { status: 500 })
  }
} 