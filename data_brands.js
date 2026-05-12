const data_brands = [
    // --- MEATS & PROTEINS ---
    {n:"Applegate Naturals (Turkey/Bacon)", s:"Friendly", c:"Shopping", d:"Nitrate-free and clean. The safest deli brand for sandwiches."},
    {n:"Boar’s Head Simplicity (Fresh Sliced)", s:"Friendly", c:"Shopping", d:"No nitrates or carrageenan. Request 'Simplicity' line specifically."},
    {n:"Open Nature (Safeway) Fresh Chicken", s:"Friendly", c:"Shopping", d:"No antibiotics or nitrates. Safe baseline protein."},
    {n:"Jennie-O Ground Turkey (Plain)", s:"Friendly", c:"Shopping", d:"Safe for burgers. Avoid the pre-seasoned versions."},
    {n:"Tyson Fresh Poultry (Not Frozen)", s:"Friendly", c:"Shopping", d:"Fresh is safe; frozen bags often have citric acid washes."},
    {n:"Laura's Lean Beef", s:"Friendly", c:"Shopping", d:"Lower fat and very clean. Generally non-irritating."},
    {n:"Wild Planet Canned Tuna (Plain)", s:"Caution", c:"Shopping", d:"No broth/soy, but check for 'Natural Flavors'."},
    {n:"Hormel Natural Choice (Uncured Ham)", s:"Caution", c:"Shopping", d:"Uncured and no nitrates, but high salt can be a minor trigger."},

    // --- DAIRY & ALTERNATIVES ---
    {n:"Annie’s White Cheddar Mac", s:"Friendly", c:"Shopping", d:"No artificial yellow dyes. The safest pre-made mac."},
    {n:"Lucerne (Safeway) Cottage Cheese", s:"Friendly", c:"Shopping", d:"Safe baseline dairy. Non-acidic and high protein."},
    {n:"Horizon Organic Milk", s:"Friendly", c:"Shopping", d:"High calcium helps buffer urine pH."},
    {n:"Fage Total Plain Yogurt", s:"Caution", c:"Shopping", d:"Safer than Greek; less acidic and zero dyes/fruit acid."},
    {n:"Philadelphia Cream Cheese", s:"Friendly", c:"Shopping", d:"Neutral and safe. Avoid the 'Strawberry' or 'Veggie' mixes."},
    {n:"Silk Oat Milk (Plain)", s:"Friendly", c:"Shopping", d:"Check for citric acid; plain is usually safe."},

    // --- PANTRY & BAKERY ---
    {n:"Bob’s Red Mill Oats", s:"Friendly", c:"Shopping", d:"High quality, clean grains. The safest breakfast base."},
    {n:"Stacy’s Simply Naked Pita Chips", s:"Friendly", c:"Shopping", d:"Three ingredients. No MSG, no acid. Safe crunch."},
    {n:"Late July Organic Sea Salt Pretzels", s:"Friendly", c:"Shopping", d:"Clean, non-acidic ingredients. Safe for flares."},
    {n:"Kettle Brand Sea Salt Chips", s:"Friendly", c:"Shopping", d:"Potatoes, oil, salt. Safe. Avoid 'BBQ' or 'Salt & Vinegar'."},
    {n:"Tyler’s Acid-Free Coffee", s:"Caution", c:"Shopping", d:"Neutralized pH. Best 'real' coffee option."},
    {n:"Dandy Blend (Coffee Substitute)", s:"Friendly", c:"Shopping", d:"Roasted root substitute. Zero acid, tastes like coffee."},
    {n:"Justin’s Almond Butter", s:"Friendly", c:"Shopping", d:"Clean, non-acidic fats. Better than peanut butter for some."},
    {n:"Mission Flour Tortillas", s:"Friendly", c:"Shopping", d:"Safe and bland. Avoid 'Corn' if you are in a severe flare."},

    // --- PERSONAL CARE & LAUNDRY ---
    {n:"All Free Clear Detergent", s:"Friendly", c:"Shopping", d:"No dyes or perfumes. Crucial to prevent skin-to-bladder irritation."},
    {n:"Seventh Generation Free & Clear", s:"Friendly", c:"Shopping", d:"Safe laundry option for sensitive pelvic nerves."},
    {n:"Dove Sensitive Skin (Unscented Bar)", s:"Friendly", c:"Shopping", d:"Safest soap to avoid urethral irritation."},
    {n:"CeraVe Cleanser (Fragrance-Free)", s:"Friendly", c:"Shopping", d:"Safe skin care that won't trigger chemical sensitivity."},
    {n:"Cottonelle Gentle Care (TP)", s:"Friendly", c:"Shopping", d:"No perfumes or harsh chemicals; better for urethral sensitivity."},

    // --- SNACKS & CANDY ---
    {n:"Werther’s Original (Hard)", s:"Friendly", c:"Shopping", d:"Safe caramel. Avoid 'Sugar-Free' (artificial sweeteners)."},
    {n:"Rold Gold Tiny Twists", s:"Friendly", c:"Shopping", d:"Safe baseline snack found everywhere."},
    {n:"Enjoy Life (All Products)", s:"Friendly", c:"Shopping", d:"Allergy-safe brand; almost always bladder-friendly."},
    {n:"Barnana Plantain Chips (Pink Salt)", s:"Friendly", c:"Shopping", d:"Safe starch. Ensure no lime juice in ingredients."},

    // --- THE RED LIST (AVOID) ---
    {n:"Kraft Mac & Cheese (Blue Box)", s:"Avoid", c:"Shopping", d:"Artificial dyes (Yellow 5/6) irritate the bladder lining."},
    {n:"Oscar Mayer Hot Dogs", s:"Avoid", c:"Shopping", d:"High nitrates and chemicals. Guaranteed sting."},
    {n:"Welch’s / Mott’s Fruit Snacks", s:"Avoid", c:"Shopping", d:"Citric acid and Red 40. Huge flare triggers."},
    {n:"Hidden Valley Ranch", s:"Avoid", c:"Shopping", d:"Vinegar, MSG, and onion powder. High-level irritant."},
    {n:"Tide (Original/Scented)", s:"Avoid", c:"Shopping", d:"Strong perfumes can irritate the pelvic floor and urethra."},
    {n:"Febreze / Strong Scented Sprays", s:"Avoid", c:"Shopping", d:"Environmental irritants that can trigger nerve flares."},
    {n:"Doritos / Cheetos", s:"Avoid", c:"Shopping", d:"Dyes, MSG, and acids. A triple-threat trigger."},
    {n:"Gatorade (All Colors)", s:"Avoid", c:"Shopping", d:"Citric acid and dyes. The worst for bladder neck pain."}
];
