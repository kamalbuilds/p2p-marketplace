import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ogcwrwhkdfydnsambibm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nY3dyd2hrZGZ5ZG5zYW1iaWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTgzOTksImV4cCI6MTk5MDQ3NDM5OX0.YjxlHkxR1UpBcKwIEwWnoPMY03j5L86gCbLzAhwr2H4"
);
