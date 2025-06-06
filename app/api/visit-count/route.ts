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
        // File does not exist, initialize count to 0
        count = 0
      } else {
        console.error("Error reading visit count file:", error)
        return new Response(JSON.stringify({ error: "Failed to read visit count" }), { status: 500 })
      }
    }

    count += 1
    await fs.writeFile(countFilePath, count.toString(), "utf8")

    return new Response(JSON.stringify({ count }), { status: 200 })
  } catch (error) {
    console.error("Error in GET /api/visit-count:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 })
  }
} 