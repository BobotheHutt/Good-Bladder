const data_supps = [
    // --- YOUR CURRENT PROTOCOL ---
    {n:"NAC (N-Acetylcysteine)", s:"Friendly", c:"Supps", d:"1000mg. Antioxidant that reduces tissue inflammation and helps break down bacterial biofilms. Take with food."},
    {n:"Baking Soda (Sodium Bicarb)", s:"Friendly", c:"Supps", d:"Alkalizer used to neutralize acidic urine and stop the 'lemon on a cut' sting."},
    {n:"Selsun Blue (Selenium Sulfide)", s:"Friendly", c:"Supps", d:"Antifungal/Antibacterial wash. Use for the 'Gemtesa acne' flare-ups on the skin."},

    // --- BLADDER LINING BUILDERS (GAG LAYER REPAIR) ---
    {n:"Desert Harvest Aloe Vera", s:"Friendly", c:"Supps", d:"Super-strength, latex-free aloe. Acts as a liquid bandage to rebuild the protective GAG layer."},
    {n:"CystoMend", s:"Friendly", c:"Supps", d:"Lining repair blend (Chondroitin/Hyaluronate). Helps restore the barrier against acidic urine."},
    {n:"Cysto Renew", s:"Friendly", c:"Supps", d:"Douglas Labs blend. Calms the bladder nerves and supports the lining. No citrus triggers."},
    {n:"Chondroitin Sulfate", s:"Friendly", c:"Supps", d:"The actual 'building block' of the bladder lining. Often taken with glucosamine."},
    {n:"Sodium Hyaluronate (Oral)", s:"Friendly", c:"Supps", d:"Helps keep the bladder lining hydrated and resilient against irritation."},
    {n:"Slippery Elm", s:"Friendly", c:"Supps", d:"Contains mucilage that physically coats and soothes the urinary tract. Very low risk."},

    // --- PAIN & INFLAMMATION MANAGEMENT ---
    {n:"Prelief", s:"Friendly", c:"Supps", d:"Calcium Glycerophosphate. Take 2 pills with meals to take the acid out of food before it hits the bladder."},
    {n:"Quercetin (Bioflavonoid)", s:"Friendly", c:"Supps", d:"Natural anti-inflammatory. Helps stabilize mast cells that cause bladder flares."},
    {n:"Palmitoylethanolamide (PEA)", s:"Friendly", c:"Supps", d:"A fatty acid that helps calm the chronic nerve pain in the pelvic floor and bladder."},
    {n:"Omega-3 Fish Oil (Clean)", s:"Friendly", c:"Supps", d:"Reduces systemic inflammation. Ensure no 'lemon' flavor added to the oil."},
    {n:"Marshmallow Root (Capsules)", s:"Friendly", c:"Supps", d:"Traditional herb for bladder burning. Creates a protective 'slime' layer in the tract."},
    {n:"Corn Silk (Capsules)", s:"Friendly", c:"Supps", d:"Soothing herb specifically for irritation at the bladder neck and prostate junction."},

    // --- PHARMACEUTICALS (CONSULT DOCTOR) ---
    {n:"Alfuzosin (Uroxatral)", s:"Friendly", c:"Supps", d:"Alpha-blocker. Relaxes the bladder neck/prostate to stop the sharp mid-stream burn."},
    {n:"Botox (Injected)", s:"Friendly", c:"Supps", d:"Relaxes the bladder muscle. Takes 10-14 days to reach full effect. Non-systemic."},
    {n:"Nortriptyline / Amitriptyline", s:"Caution", c:"Supps", d:"Low-dose nerve meds. Mutes pain signals but can cause dry mouth and grogginess."},
    {n:"AZO (Phenazopyridine)", s:"Caution", c:"Supps", d:"Emergency tract numbing. Use only for 48 hours; can irritate the kidneys if overused."},
    {n:"Gemtesa", s:"Caution", c:"Supps", d:"OAB med. Good for spasms but likely the cause of your current skin whiteheads/acne."},
    {n:"D-Mannose", s:"Caution", c:"Supps", d:"Good for E.coli prevention, but some brands use citric acid as a filler. Check label."},

    // --- SLEEP & STRESS ---
    {n:"Melatonin", s:"Friendly", c:"Supps", d:"Anti-inflammatory properties and helps with sleep during overnight frequency flares."},
    {n:"L-Theanine", s:"Friendly", c:"Supps", d:"Calms the nervous system; helps reduce the 'fight or flight' kidney dump (diuresis)."},
    {n:"Valerian Root", s:"Friendly", c:"Supps", d:"Safe herbal sleep aid. Doesn't usually irritate the bladder."},

    // --- THE RED LIST (AVOID - BLADDER FIRE) ---
    {n:"Vitamin C (Ascorbic Acid)", s:"Avoid", c:"Supps", d:"Pure acid. Like pouring bleach on a wound for an IC bladder. Avoid entirely."},
    {n:"Vitamin B-Complex / B12", s:"Avoid", c:"Supps", d:"Known nerve irritant. Causes intense 'neon' urine and sharp burning pain."},
    {n:"Standard Multivitamins", s:"Avoid", c:"Supps", d:"Usually loaded with high-dose B and C vitamins + artificial dyes (Red 40)."},
    {n:"Cranberry Supplements", s:"Avoid", c:"Supps", d:"Extremely acidic. Great for UTIs in normal bladders, poison for a raw IC bladder."},
    {n:"Zinc (High Dose)", s:"Avoid", c:"Supps", d:"Can be a systemic irritant for the prostate and bladder during an active flare."},
    {n:"St. John’s Wort", s:"Avoid", c:"Supps", d:"Can cause photosensitivity and increase general nerve sensitivity in the pelvis."},
    {n:"Energy Boosters (Caffeine/Guarana)", s:"Avoid", c:"Supps", d:"Pure stimulants. Will trigger spasms and 200ml emergency flushes."}
];
