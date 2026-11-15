from PIL import Image

src_path = r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\dm-labs-logo.png"
img = Image.open(src_path).convert("RGBA")

# Bounding box of entire logo: (66, 379, 964, 587)
full_box = (56, 369, 974, 597)
logo_trimmed = img.crop(full_box)
logo_trimmed.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\logo-trimmed.png")

# Symbol box: x from 56 to 390, y from 369 to 597
symbol_box = (56, 369, 390, 597)
symbol_img = img.crop(symbol_box)
symbol_img.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\dm-symbol.png")

def make_transparent_pil(pil_img):
    img_rgba = pil_img.copy()
    w, h = img_rgba.size
    pix = img_rgba.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = pix[x, y]
            brightness = (r + g + b) / 3.0
            if brightness > 248:
                pix[x, y] = (r, g, b, 0)
            elif brightness > 235:
                # smooth fade
                new_a = int((248 - brightness) / (248 - 235) * 255)
                pix[x, y] = (r, g, b, min(a, new_a))
    return img_rgba

logo_trans = make_transparent_pil(logo_trimmed)
logo_trans.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\logo-transparent.png")

symbol_trans = make_transparent_pil(symbol_img)
symbol_trans.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\dm-symbol-transparent.png")

# Favicon: square 64x64 and 32x32 from symbol
w, h = symbol_trans.size
side = max(w, h) + 20
square_fav = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square_fav.paste(symbol_trans, ((side - w) // 2, (side - h) // 2))
fav64 = square_fav.resize((64, 64), Image.Resampling.LANCZOS)
fav32 = square_fav.resize((32, 32), Image.Resampling.LANCZOS)
fav64.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\favicon.png")
fav64.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\favicon.png")
fav64.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\favicon.ico", format="ICO", sizes=[(32, 32), (64, 64)])

# Dark mode logo: text and divider line turned to clean white
logo_dark = logo_trans.copy()
w, h = logo_dark.size
pix = logo_dark.load()
divider_rel_x = 345
for y in range(h):
    for x in range(divider_rel_x, w):
        r, g, b, a = pix[x, y]
        if a > 40 and r < 90 and g < 90 and b < 90:
            pix[x, y] = (255, 255, 255, a)

logo_dark.save(r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\brand\logo-dark-mode.png")
print("All brand assets generated successfully via PIL!")
