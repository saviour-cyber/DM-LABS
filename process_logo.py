import sys
from PIL import Image

src_path = r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\dm-labs-logo.png"
img = Image.open(src_path).convert("RGBA")
print(f"Original size: {img.size}")

# Find bounding box where pixel is not near-white (> 245)
width, height = img.size
left, top, right, bottom = width, height, 0, 0

for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        # if not background white/near-white
        if not (r > 245 and g > 245 and b > 245):
            if x < left: left = x
            if x > right: right = x
            if y < top: top = y
            if y > bottom: bottom = y

print(f"Content bbox: ({left}, {top}, {right}, {bottom})")
# Add a small padding
pad = 20
box = (max(0, left - pad), max(0, top - pad), min(width, right + pad), min(height, bottom + pad))
trimmed = img.crop(box)
trimmed.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\logo-trimmed.png")
print("Saved logo-trimmed.png")

# Now crop just the DM symbol (left of the divider bar)
# Find divider bar x position (black vertical line)
# Let's crop from left to roughly where the divider is
# Let's inspect coordinates of symbol
divider_x = None
for x in range(left, right):
    # vertical line has lots of dark pixels in a column
    dark_count = 0
    for y in range(top, bottom):
        r, g, b, a = img.getpixel((x, y))
        if r < 40 and g < 40 and b < 40:
            dark_count += 1
    if dark_count > (bottom - top) * 0.7:
        divider_x = x
        break

print(f"Divider X approx: {divider_x}")
if divider_x:
    symbol_box = (max(0, left - 15), max(0, top - 15), divider_x - 10, min(height, bottom + 15))
    symbol_img = img.crop(symbol_box)
    symbol_img.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\dm-symbol.png")
    # Also save as favicon 64x64 and 32x32
    fav = symbol_img.resize((64, 64), Image.Resampling.LANCZOS)
    fav.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\favicon.png")
    print("Saved dm-symbol.png and favicon.png")
