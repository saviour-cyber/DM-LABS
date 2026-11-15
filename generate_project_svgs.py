import os

output_dir = r"C:\Users\saviour\.gemini\antigravity\scratch\dmlabs-website\public\projects"

svgs = {
    "school-portal.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E60012"/>
      <stop offset="100%" stop-color="#FF4D5A"/>
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#bg1)"/>
  <rect width="800" height="500" fill="url(#grid)"/>
  <circle cx="200" cy="150" r="180" fill="#0062FF" opacity="0.12" filter="blur(60px)"/>
  <circle cx="650" cy="350" r="150" fill="#E60012" opacity="0.08" filter="blur(50px)"/>
  
  <!-- Dashboard Mockup Card -->
  <g transform="translate(100, 60)">
    <rect width="600" height="380" rx="12" fill="#141B2D" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <!-- Header Bar -->
    <rect width="600" height="46" rx="12" fill="#1A2238"/>
    <circle cx="24" cy="23" r="6" fill="#E60012" opacity="0.8"/>
    <circle cx="44" cy="23" r="6" fill="#F59E0B" opacity="0.8"/>
    <circle cx="64" cy="23" r="6" fill="#10B981" opacity="0.8"/>
    <text x="94" y="28" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="600">DM Labs School Portal — Academic &amp; Fee Intelligence</text>
    
    <!-- Sidebar -->
    <rect x="0" y="46" width="140" height="334" fill="#121828"/>
    <rect x="16" y="70" width="108" height="28" rx="6" fill="url(#blueGrad)" opacity="0.9"/>
    <rect x="16" y="110" width="108" height="20" rx="4" fill="#1E293B"/>
    <rect x="16" y="140" width="108" height="20" rx="4" fill="#1E293B"/>
    <rect x="16" y="170" width="108" height="20" rx="4" fill="#1E293B"/>
    
    <!-- Main Content Area -->
    <g transform="translate(160, 65)">
      <!-- Metric Cards -->
      <rect x="0" y="0" width="130" height="65" rx="8" fill="#1E293B" stroke="rgba(0, 98, 255, 0.3)" stroke-width="1"/>
      <text x="14" y="24" fill="#94A3B8" font-family="sans-serif" font-size="11">Total Students</text>
      <text x="14" y="48" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">1,480</text>
      
      <rect x="145" y="0" width="130" height="65" rx="8" fill="#1E293B" stroke="rgba(230, 0, 18, 0.3)" stroke-width="1"/>
      <text x="159" y="24" fill="#94A3B8" font-family="sans-serif" font-size="11">Fee Reconciled</text>
      <text x="159" y="48" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">98.4%</text>

      <rect x="290" y="0" width="130" height="65" rx="8" fill="#1E293B" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
      <text x="304" y="24" fill="#94A3B8" font-family="sans-serif" font-size="11">Active Classes</text>
      <text x="304" y="48" fill="#3B82F6" font-family="sans-serif" font-size="18" font-weight="bold">42</text>

      <!-- Bar Chart -->
      <rect x="0" y="85" width="420" height="150" rx="8" fill="#161F33"/>
      <text x="16" y="110" fill="#F8FAFC" font-family="sans-serif" font-size="13" font-weight="bold">Monthly Fee Collection &amp; Attendance Rate</text>
      
      <!-- Bars -->
      <rect x="30" y="170" width="24" height="45" rx="3" fill="#0062FF"/>
      <rect x="60" y="150" width="24" height="65" rx="3" fill="#0062FF"/>
      <rect x="90" y="135" width="24" height="80" rx="3" fill="#0062FF"/>
      <rect x="120" y="160" width="24" height="55" rx="3" fill="#0062FF"/>
      <rect x="150" y="140" width="24" height="75" rx="3" fill="#0062FF"/>
      <rect x="180" y="125" width="24" height="90" rx="3" fill="url(#blueGrad)"/>

      <!-- Spline -->
      <path d="M 230 190 Q 280 140 330 150 T 400 130" fill="none" stroke="#E60012" stroke-width="3"/>
      <circle cx="400" cy="130" r="4" fill="#E60012"/>
      
      <!-- Progress Bar -->
      <rect x="0" y="250" width="420" height="45" rx="8" fill="#1E293B"/>
      <text x="16" y="276" fill="#CBD5E1" font-family="sans-serif" font-size="12">End-of-Term Automated Report Generation: 100% Complete</text>
    </g>
  </g>
</svg>""",

    "network-infra.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A12"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="blueLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0062FF"/>
      <stop offset="100%" stop-color="#60A5FA"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg2)"/>
  
  <!-- Server Rack Visual -->
  <g transform="translate(140, 70)">
    <!-- Rack Cabinet -->
    <rect width="240" height="360" rx="8" fill="#111827" stroke="#374151" stroke-width="2"/>
    <!-- U-slots -->
    <rect x="15" y="20" width="210" height="30" rx="4" fill="#1F2937" stroke="#4B5563"/>
    <circle cx="35" cy="35" r="4" fill="#10B981"/>
    <circle cx="48" cy="35" r="4" fill="#0062FF"/>
    <circle cx="61" cy="35" r="4" fill="#0062FF"/>
    
    <rect x="15" y="60" width="210" height="40" rx="4" fill="#1E293B" stroke="#0062FF"/>
    <!-- Switch ports -->
    <g fill="#0062FF" opacity="0.9">
      <rect x="30" y="70" width="8" height="6" rx="1"/>
      <rect x="42" y="70" width="8" height="6" rx="1"/>
      <rect x="54" y="70" width="8" height="6" rx="1"/>
      <rect x="66" y="70" width="8" height="6" rx="1"/>
      <rect x="78" y="70" width="8" height="6" rx="1"/>
      <rect x="90" y="70" width="8" height="6" rx="1"/>
      <rect x="102" y="70" width="8" height="6" rx="1"/>
      <rect x="114" y="70" width="8" height="6" rx="1"/>
      <rect x="126" y="70" width="8" height="6" rx="1"/>
    </g>

    <rect x="15" y="110" width="210" height="40" rx="4" fill="#1E293B"/>
    <rect x="15" y="160" width="210" height="40" rx="4" fill="#1E293B"/>
    <rect x="15" y="210" width="210" height="50" rx="4" fill="#182234" stroke="#E60012" stroke-width="1"/>
    <text x="30" y="238" fill="#F8FAFC" font-family="monospace" font-size="11">Core Firewall UTM</text>
    <circle cx="195" cy="235" r="4" fill="#E60012"/>
    
    <rect x="15" y="270" width="210" height="70" rx="4" fill="#111827" stroke="#374151"/>
    <text x="30" y="305" fill="#94A3B8" font-family="monospace" font-size="11">UPS Online Power</text>
  </g>

  <!-- Network Topology Nodes -->
  <g transform="translate(440, 90)">
    <!-- Central Cloud / Core Gateway -->
    <circle cx="160" cy="60" r="36" fill="#1E293B" stroke="#0062FF" stroke-width="2"/>
    <text x="135" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold">Core</text>

    <!-- Floor Nodes -->
    <circle cx="60" cy="190" r="28" fill="#1E293B" stroke="#3B82F6" stroke-width="2"/>
    <text x="44" y="194" fill="#93C5FD" font-family="sans-serif" font-size="11">Floor 1</text>

    <circle cx="160" cy="190" r="28" fill="#1E293B" stroke="#3B82F6" stroke-width="2"/>
    <text x="144" y="194" fill="#93C5FD" font-family="sans-serif" font-size="11">Floor 2</text>

    <circle cx="260" cy="190" r="28" fill="#1E293B" stroke="#3B82F6" stroke-width="2"/>
    <text x="244" y="194" fill="#93C5FD" font-family="sans-serif" font-size="11">Floor 3</text>

    <!-- Connectors -->
    <path d="M 160 96 L 60 162" stroke="url(#blueLine)" stroke-width="2"/>
    <path d="M 160 96 L 160 162" stroke="url(#blueLine)" stroke-width="2"/>
    <path d="M 160 96 L 260 162" stroke="url(#blueLine)" stroke-width="2"/>

    <!-- Access Points -->
    <g transform="translate(0, 260)">
      <rect x="30" y="0" width="60" height="40" rx="6" fill="#0F172A" stroke="#0062FF"/>
      <text x="42" y="24" fill="#FFFFFF" font-family="sans-serif" font-size="10">Wi-Fi 6</text>

      <rect x="130" y="0" width="60" height="40" rx="6" fill="#0F172A" stroke="#0062FF"/>
      <text x="142" y="24" fill="#FFFFFF" font-family="sans-serif" font-size="10">Wi-Fi 6</text>

      <rect x="230" y="0" width="60" height="40" rx="6" fill="#0F172A" stroke="#0062FF"/>
      <text x="242" y="24" fill="#FFFFFF" font-family="sans-serif" font-size="10">Wi-Fi 6</text>

      <path d="M 60 -42 L 60 0" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,3"/>
      <path d="M 160 -42 L 160 0" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,3"/>
      <path d="M 260 -42 L 260 0" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>
  </g>
</svg>""",

    "pos-system.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="posBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#posBg)"/>
  
  <!-- POS Register Terminal Mockup -->
  <g transform="translate(100, 60)">
    <rect width="600" height="380" rx="12" fill="#141B2D" stroke="rgba(255,255,255,0.1)"/>
    <!-- Top register status -->
    <rect width="600" height="50" rx="12" fill="#0F172A"/>
    <text x="24" y="32" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">DM Labs Retail POS • Register #01 (Active)</text>
    <rect x="490" y="14" width="86" height="24" rx="12" fill="#10B981" opacity="0.2"/>
    <text x="506" y="30" fill="#10B981" font-family="sans-serif" font-size="11" font-weight="bold">ONLINE</text>

    <!-- Product Grid Left -->
    <g transform="translate(24, 70)">
      <rect x="0" y="0" width="100" height="80" rx="6" fill="#1E293B" stroke="rgba(0,98,255,0.4)"/>
      <text x="14" y="35" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="600">Product A</text>
      <text x="14" y="60" fill="#60A5FA" font-family="sans-serif" font-size="12">KES 1,250</text>

      <rect x="115" y="0" width="100" height="80" rx="6" fill="#1E293B" stroke="rgba(0,98,255,0.4)"/>
      <text x="129" y="35" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="600">Product B</text>
      <text x="129" y="60" fill="#60A5FA" font-family="sans-serif" font-size="12">KES 3,400</text>

      <rect x="230" y="0" width="100" height="80" rx="6" fill="#1E293B" stroke="rgba(0,98,255,0.4)"/>
      <text x="244" y="35" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="600">Product C</text>
      <text x="244" y="60" fill="#60A5FA" font-family="sans-serif" font-size="12">KES 850</text>

      <rect x="0" y="95" width="100" height="80" rx="6" fill="#1E293B"/>
      <rect x="115" y="95" width="100" height="80" rx="6" fill="#1E293B"/>
      <rect x="230" y="95" width="100" height="80" rx="6" fill="#1E293B"/>
      
      <rect x="0" y="190" width="330" height="90" rx="8" fill="#161F33"/>
      <text x="16" y="225" fill="#94A3B8" font-family="sans-serif" font-size="12">Barcode Scanner Ready • Scanning Stream Active</text>
      <rect x="16" y="240" width="298" height="24" rx="4" fill="#0F172A"/>
      <text x="26" y="256" fill="#3B82F6" font-family="monospace" font-size="11">||| |||| || | |||| ||| |||| 883920194</text>
    </g>

    <!-- Cart & Checkout Right -->
    <g transform="translate(370, 70)">
      <rect width="206" height="280" rx="8" fill="#0D1321" stroke="#334155"/>
      <text x="16" y="28" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold">Current Order (#492)</text>
      
      <line x1="16" y1="40" x2="190" y2="40" stroke="#1E293B"/>
      <text x="16" y="65" fill="#CBD5E1" font-family="sans-serif" font-size="11">1x Product B</text>
      <text x="140" y="65" fill="#CBD5E1" font-family="sans-serif" font-size="11">3,400</text>

      <text x="16" y="90" fill="#CBD5E1" font-family="sans-serif" font-size="11">2x Product A</text>
      <text x="140" y="90" fill="#CBD5E1" font-family="sans-serif" font-size="11">2,500</text>

      <line x1="16" y1="120" x2="190" y2="120" stroke="#334155"/>
      <text x="16" y="145" fill="#94A3B8" font-family="sans-serif" font-size="12">Total Due</text>
      <text x="16" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold">KES 5,900</text>

      <!-- Pay Button -->
      <rect x="16" y="210" width="174" height="44" rx="6" fill="#0062FF"/>
      <text x="48" y="237" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold">M-Pesa / Card Pay</text>
    </g>
  </g>
</svg>""",

    "brand-design.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="brandBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#141E33"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#brandBg)"/>
  
  <!-- Brand Guide Canvas -->
  <g transform="translate(100, 60)">
    <rect width="600" height="380" rx="12" fill="#FFFFFF" opacity="0.03" stroke="rgba(255,255,255,0.15)"/>
    
    <!-- Color Swatches -->
    <text x="40" y="50" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Brand Identity &amp; Visual System</text>
    
    <g transform="translate(40, 75)">
      <!-- Blue Swatch -->
      <rect x="0" y="0" width="110" height="90" rx="8" fill="#0062FF"/>
      <text x="10" y="110" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">Electric Blue</text>
      <text x="10" y="125" fill="#94A3B8" font-family="monospace" font-size="10">#0062FF</text>

      <!-- Red Swatch -->
      <rect x="130" y="0" width="110" height="90" rx="8" fill="#E60012"/>
      <text x="140" y="110" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">Crimson Accent</text>
      <text x="140" y="125" fill="#94A3B8" font-family="monospace" font-size="10">#E60012</text>

      <!-- Slate Swatch -->
      <rect x="260" y="0" width="110" height="90" rx="8" fill="#0B0F19" stroke="#334155"/>
      <text x="270" y="110" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">Core Charcoal</text>
      <text x="270" y="125" fill="#94A3B8" font-family="monospace" font-size="10">#0B0F19</text>

      <!-- Light Swatch -->
      <rect x="390" y="0" width="110" height="90" rx="8" fill="#F8FAFC"/>
      <text x="400" y="110" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">Pure Canvas</text>
      <text x="400" y="125" fill="#94A3B8" font-family="monospace" font-size="10">#F8FAFC</text>
    </g>

    <!-- Typography Specs -->
    <g transform="translate(40, 230)">
      <rect width="520" height="110" rx="8" fill="#121A2D" stroke="rgba(255,255,255,0.08)"/>
      <text x="24" y="34" fill="#60A5FA" font-family="sans-serif" font-size="12" font-weight="bold">TYPOGRAPHY HIERARCHY</text>
      <text x="24" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold">Plus Jakarta Sans / Inter Bold 36pt</text>
      <text x="24" y="92" fill="#94A3B8" font-family="sans-serif" font-size="13">Body copy regular 16pt with balanced 1.6 line height for effortless readability.</text>
    </g>
  </g>
</svg>""",

    "web-platform.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="webBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C16"/>
      <stop offset="100%" stop-color="#141E36"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#webBg)"/>
  
  <!-- Browser Frame -->
  <g transform="translate(100, 60)">
    <rect width="600" height="380" rx="10" fill="#111827" stroke="rgba(255,255,255,0.12)"/>
    <rect width="600" height="40" rx="10" fill="#1F2937"/>
    <circle cx="20" cy="20" r="5" fill="#EF4444"/>
    <circle cx="36" cy="20" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="20" r="5" fill="#10B981"/>
    
    <rect x="80" y="10" width="340" height="20" rx="4" fill="#111827"/>
    <text x="96" y="24" fill="#9CA3AF" font-family="sans-serif" font-size="11">https://dmlabs.tech</text>

    <!-- Page Body -->
    <g transform="translate(30, 60)">
      <rect x="0" y="0" width="320" height="22" rx="4" fill="#0062FF"/>
      <rect x="0" y="32" width="240" height="12" rx="3" fill="#4B5563"/>
      <rect x="0" y="52" width="200" height="12" rx="3" fill="#374151"/>
      
      <rect x="0" y="85" width="120" height="36" rx="6" fill="#0062FF"/>
      <rect x="135" y="85" width="120" height="36" rx="6" fill="transparent" stroke="#E60012" stroke-width="2"/>

      <!-- 3 Feature Cards -->
      <rect x="0" y="145" width="160" height="130" rx="8" fill="#1F2937" stroke="rgba(255,255,255,0.06)"/>
      <rect x="180" y="145" width="160" height="130" rx="8" fill="#1F2937" stroke="rgba(255,255,255,0.06)"/>
      <rect x="360" y="145" width="160" height="130" rx="8" fill="#1F2937" stroke="rgba(255,255,255,0.06)"/>
    </g>
  </g>
</svg>""",

    "security-cctv.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="secBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06090F"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#secBg)"/>

  <!-- 4-Split Surveillance Monitor -->
  <g transform="translate(100, 60)">
    <rect width="600" height="380" rx="10" fill="#0D111A" stroke="#374151" stroke-width="2"/>
    
    <!-- Cam 1 (Warehouse Gate) -->
    <rect x="15" y="15" width="275" height="165" rx="6" fill="#182030"/>
    <text x="28" y="38" fill="#10B981" font-family="monospace" font-size="11">● CAM 01 [MAIN GATE] REC</text>
    <circle cx="152" cy="100" r="30" fill="none" stroke="#0062FF" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="110" y="155" fill="#64748B" font-family="sans-serif" font-size="10">Target Tracking: Active</text>

    <!-- Cam 2 (Server Room) -->
    <rect x="310" y="15" width="275" height="165" rx="6" fill="#182030"/>
    <text x="323" y="38" fill="#10B981" font-family="monospace" font-size="11">● CAM 02 [SERVER ROOM] REC</text>
    <rect x="410" y="60" width="70" height="90" fill="#0F172A" stroke="#0062FF"/>

    <!-- Cam 3 (Perimeter North) -->
    <rect x="15" y="195" width="275" height="165" rx="6" fill="#182030"/>
    <text x="28" y="218" fill="#10B981" font-family="monospace" font-size="11">● CAM 03 [NORTH PERIMETER] REC</text>

    <!-- Cam 4 (Biometric Access Audit) -->
    <rect x="310" y="195" width="275" height="165" rx="6" fill="#182030"/>
    <text x="323" y="218" fill="#E60012" font-family="monospace" font-size="11">● BIOMETRIC ACCESS TERMINAL</text>
    <text x="330" y="255" fill="#FFFFFF" font-family="sans-serif" font-size="12">15:42:01 — Door 01: Access Granted</text>
    <text x="330" y="280" fill="#94A3B8" font-family="sans-serif" font-size="12">15:44:12 — Door 02: Access Granted</text>
    <text x="330" y="305" fill="#3B82F6" font-family="sans-serif" font-size="12">15:47:33 — Server Room: Fingerprint Verified</text>
  </g>
</svg>"""
}

for filename, content in svgs.items():
    filepath = os.path.join(output_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written: {filename}")
print("All project SVGs created successfully!")
