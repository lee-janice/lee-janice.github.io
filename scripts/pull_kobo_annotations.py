import sqlite3
import yaml
import ruamel.yaml

# 1. Connect to the database file
# If the file does not exist, a new one will be created.
conn = sqlite3.connect('scripts/KoboReader.sqlite')

# 2. Create a cursor object to execute SQL commands
conn.row_factory = sqlite3.Row
cur = conn.cursor()

# 3. Execute an SQL query (e.g., to select all rows from a table)
AUTHOR = "'Caro, Robert A'"
TITLE = "'The power broker : Robert Moses and the fall of New York'"

query = f"""
SELECT c.Title,
       c.Attribution,
       c1.Title as ChapterTitle,
       b.Text,
       TRIM(b.Annotation) as Annotation,
       b.ChapterProgress
FROM Bookmark b
    INNER JOIN content c ON b.VolumeID = c.ContentID
    LEFT OUTER JOIN content c1 ON (c1.ContentId LIKE b.ContentId || '%')
WHERE c.Title LIKE {TITLE} AND c.Attribution LIKE {AUTHOR}
ORDER BY b.ChapterProgress ASC,
         b.DateCreated ASC
"""
# cur.execute("SELECT, Text, TRIM(Annotation) as Annotation FROM Bookmark")
cur.execute(query)

# 4. Fetch the results
# fetchall() retrieves all rows as a list of tuples
rows = cur.fetchall()

# You can also use fetchone() for a single row or fetchmany(size) for a specific number of rows

# 5. Process the data
if not rows:
    print("No annotations found for the specified book.")
else:
    # Get book info from the first row
    book = rows[0]
    author_full = book["Attribution"]
    parts = author_full.split()
    author_first = parts[0] if parts else ""
    author_last = ' '.join(parts[1:]) if len(parts) > 1 else ""
    title = book["Title"]
    
    # Generate filename
    filename = f"{author_last.lower()}-{author_first.lower()}-{title.lower().replace(' ', '-')}.yaml"
    
    # Prepare quotes list
    quotes = []
    for i, row in enumerate(rows):
        quote_entry = {
            "item": {
                "quote": row["Text"] or None,
                "description": None,
                "chapter_title": row["ChapterTitle"] or None,
                "chapter_number": None,
                "progress": row["ChapterProgress"],
                "page_number": None,
                "notes": row["Annotation"] or None,
                "favorite": None,
                "tags": []
            }   
        }
        if i == 0:
            # quote_entry["item"]["tags"].append("beginning")
            quote_entry["item"]["tags"] = ['beginning']
        elif i == len(rows) - 1:
            # quote_entry["item"]["tags"].append("ending")
            quote_entry["item"]["tags"] = ['ending']
        quotes.append(quote_entry)
    
    # Prepare data
    print(title)
    data = {
        "title": title,
        "author_first": author_first,
        "author_last": author_last,
        "type": "book",
        "quotes": quotes
    }
    
    # Write to YAML file
    with open(filename, 'w', encoding='utf-8') as f:
        yaml = ruamel.yaml.YAML()
        yaml.default_flow_style = None
        yaml.allow_unicode = True
        yaml.indent(sequence=2, offset=2)
        yaml.dump(data, f)
    
    print(f"YAML file written to {filename}")

# 6. Close the connection
conn.close()
