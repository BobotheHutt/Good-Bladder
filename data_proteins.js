const data_proteins = [
    // FRESH POULTRY (The Safest Zone)
    {n:"Chicken Breast (Fresh/Skinless)", s:"Friendly", c:"Proteins", d:"The ultimate safe protein. Roast or grill with olive oil and salt."},
    {n:"Chicken Thighs (Fresh)", s:"Friendly", c:"Proteins", d:"Safe and more flavorful; skip spicy rubs."},
    {n:"Ground Chicken", s:"Friendly", c:"Proteins", d:"Great for burgers. Ensure it's 100% chicken with no added 'natural flavors'."},
    {n:"Turkey Breast (Fresh)", s:"Friendly", c:"Proteins", d:"Very safe baseline protein. Avoid pre-basted turkeys (often have broth/acid)."},
    {n:"Ground Turkey (93% Lean)", s:"Friendly", c:"Proteins", d:"Safe and versatile. Avoid 'Taco Seasoned' pre-packaged versions."},
    {n:"Cornish Game Hen", s:"Friendly", c:"Proteins", d:"Safe alternative to chicken. Keep seasoning simple (Thyme/Rosemary)."},

    // EGGS
    {n:"Eggs (Large/Organic)", s:"Friendly", c:"Proteins", d:"Extremely safe. Poached, scrambled, or boiled are best."},
    {n:"Egg Whites (Carton)", s:"Friendly", c:"Proteins", d:"Very safe. Check for preservatives in the carton; pure is best."},
    
    // FRESH BEEF & PORK
    {n:"Steak (Filet/Ribeye/Sirloin)", s:"Friendly", c:"Proteins", d:"Fresh beef is usually very safe. Avoid 'aged' steaks (high tyramine)."},
    {n:"Ground Beef (Extra Lean)", s:"Friendly", c:"Proteins", d:"Safe. Use for burgers or meatloaf without onions/peppers."},
    {n:"Beef Roast (Chuck/Pot Roast)", s:"Friendly", c:"Proteins", d:"Safe. Slow cook with carrots and potatoes, no wine or onion."},
    {n:"Pork Chops (Fresh/Center Cut)", s:"Friendly", c:"Proteins", d:"Safe. Avoid 'pre-marinated' chops from the meat case."},
    {n:"Pork Tenderloin", s:"Friendly", c:"Proteins", d:"Very safe and lean. Roast with rosemary and garlic."},
    {n:"Lamb Chops", s:"Friendly", c:"Proteins", d:"Safe and nutrient-dense. Generally non-irritating."},
    {n:"Venison / Game Meats", s:"Friendly", c:"Proteins", d:"Naturally lean and low-irritant. Very safe if fresh."},

    // FRESH SEAFOOD
    {n:"Salmon (Wild/Atlantic)", s:"Friendly", c:"Proteins", d:"Omega-3s help with bladder inflammation. Do NOT use lemon."},
    {n:"Cod / Halibut / Tilapia", s:"Friendly", c:"Proteins", d:"Bland white fish is very safe. Bake with butter and herbs."},
    {n:"Shrimp (Fresh/Frozen Plain)", s:"Friendly", c:"Proteins", d:"Safe. Ensure they aren't 'Citric Acid' preserved (check the bag)."},
    {n:"Scallops", s:"Friendly", c:"Proteins", d:"Safe and non-acidic. Pan-sear in butter."},
    {n:"Lobster", s:"Friendly", c:"Proteins", d:"Safe luxury protein. Avoid cocktail sauce or lemon butter."},
    {n:"Crab (Fresh/King/Snow)", s:"Friendly", c:"Proteins", d:"Safe. Avoid 'Imitation Crab' (contains dyes and fillers)."},
    {n:"Tuna Steak (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Avoid canned tuna in broth/oil as a baseline."},

    // PROCESSED & DELI (The Caution Zone)
    {n:"Applegate Naturals Turkey", s:"Friendly", c:"Proteins", d:"Nitrate-free and clean. The safest deli brand for sandwiches."},
    {n:"Boar's Head Lower Sodium Turkey", s:"Caution", c:"Proteins", d:"Generally safe, but ask for the 'No Nitrate' version."},
    {n:"Bacon (Uncured/Nitrate-Free)", s:"Caution", c:"Proteins", d:"Nitrates are a major trigger. Only eat 'Uncured' versions."},
    {n:"Prosciutto (Traditional)", s:"Caution", c:"Proteins", d:"Usually just pork and salt, but high salt can irritate some."},
    {n:"Canned Tuna (In Water)", s:"Caution", c:"Proteins", d:"Check for 'Vegetable Broth'—often contains onion/soy/acid."},
    {n:"Rotisserie Chicken (Store Bought)", s:"Caution", c:"Proteins", d:"The skin often has sugar, onion, and citric acid. Eat the white meat only."},
    
    // THE RED LIST (The Avoid Zone)
    {n:"Pepperoni", s:"Avoid", c:"Proteins", d:"Nitrates, spices, and acid. Huge trigger for mid-stream burning."},
    {n:"Salami / Hard Salami", s:"Avoid", c:"Proteins", d:"Fermented, cured, and spicy. High nerve irritant."},
    {n:"Hot Dogs / Franks", s:"Avoid", c:"Proteins", d:"Loaded with nitrates, fillers, and preservatives."},
    {n:"Breakfast Sausage (Spicy/Red Pepper)", s:"Avoid", c:"Proteins", d:"The red pepper flakes will burn the bladder neck."},
    {n:"Corned Beef / Pastrami", s:"Avoid", c:"Proteins", d:"Highly cured and pepper-heavy. Massive flare risk."},
    {n:"Soy Burgers / MorningStar", s:"Avoid", c:"Proteins", d:"Soy is a top-tier bladder irritant for most patients."},
    {n:"Tofu / Tempeh", s:"Avoid", c:"Proteins", d:"Soy based. Avoid while Botox is settling."},
    {n:"Imitation Crab (Surimi)", s:"Avoid", c:"Proteins", d:"Contains dyes, sugar, and sorbitol; all bad for the bladder."},
    {n:"Anchovies (Canned)", s:"Avoid", c:"Proteins", d:"Extremely high salt and preserved in oil/acid."},
    {n:"Liver / Organ Meats", s:"Avoid", c:"Proteins", d:"High in tyramine and purines; can trigger nerve sensitivity."},
    {n:"Beef Jerky", s:"Avoid", c:"Proteins", d:"Soy sauce, liquid smoke, and preservatives. Absolute trigger."},
    {n:"Canned Chili / Meat Stew", s:"Avoid", c:"Proteins", d:"Preservatives and hidden onions/peppers are everywhere."},

    // PLANT-BASED SAFE OPTIONS
    {n:"Pine Nuts", s:"Friendly", c:"Proteins", d:"Great for adding protein to pasta or salads."},
    {n:"Almonds (Sliced/Slivered)", s:"Friendly", c:"Proteins", d:"Safe protein crunch for oatmeal or yogurt."},
    {n:"Cashews (Raw/Salted)", s:"Friendly", c:"Proteins", d:"Generally safe. Avoid 'Honey Roasted' (sugar/acid)."},
    {n:"Pumpkin Seeds", s:"Friendly", c:"Proteins", d:"Safe and known to be good for bladder/prostate health."},
    {n:"Sunflower Seeds", s:"Friendly", c:"Proteins", d:"Safe. Stick to plain/salted, avoid BBQ or Ranch flavors."}
];
