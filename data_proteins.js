const data_proteins = [
    // POULTRY
    {n:"Chicken Breast (Fresh)", s:"Friendly", c:"Proteins", d:"Safest protein. Roast or grill without spicy rubs."},
    {n:"Chicken Thighs (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. More flavor, keep seasoning simple."},
    {n:"Ground Chicken (Plain)", s:"Friendly", c:"Proteins", d:"Check for 'natural flavors' or broth additions."},
    {n:"Turkey Breast (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Avoid pre-basted turkeys with additives."},
    {n:"Ground Turkey (Plain)", s:"Friendly", c:"Proteins", d:"Safe and versatile for burgers or meatloaf."},
    {n:"Cornish Game Hen", s:"Friendly", c:"Proteins", d:"Safe alternative to chicken."},
    {n:"Duck Breast (Fresh)", s:"Friendly", c:"Proteins", d:"Rich but safe. Avoid orange or fruit sauces."},
    {n:"Quail", s:"Friendly", c:"Proteins", d:"Small, lean, and very safe."},
    {n:"Chicken Wings (Plain)", s:"Friendly", c:"Proteins", d:"Safe if baked with salt. Avoid all Buffalo/BBQ sauces."},

    // EGGS
    {n:"Eggs (All Styles)", s:"Friendly", c:"Proteins", d:"Extremely safe baseline protein."},
    {n:"Egg Whites (Carton)", s:"Friendly", c:"Proteins", d:"Check for preservatives; pure is best."},

    // BEEF
    {n:"Steak (Filet/Ribeye/Sirloin)", s:"Friendly", c:"Proteins", d:"Fresh beef is safe. Avoid 'aged' beef."},
    {n:"Ground Beef (Lean)", s:"Friendly", c:"Proteins", d:"Safe for burgers. Skip onions/peppers."},
    {n:"Beef Roast (Pot Roast)", s:"Friendly", c:"Proteins", d:"Safe. Slow cook with carrots, no wine."},
    {n:"Beef Tips / Kabobs", s:"Friendly", c:"Proteins", d:"Safe if not pre-marinated in soy/vinegar."},
    {n:"Short Ribs (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Braise with broth, no red wine."},

    // PORK
    {n:"Pork Chops (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Avoid pre-marinated cuts."},
    {n:"Pork Tenderloin", s:"Friendly", c:"Proteins", d:"Lean and safe. Use rosemary/garlic."},
    {n:"Pork Roast", s:"Friendly", c:"Proteins", d:"Safe baseline protein."},
    {n:"Ground Pork", s:"Friendly", c:"Proteins", d:"Safe if plain (no sausage seasoning)."},

    // LAMB & GAME
    {n:"Lamb Chops", s:"Friendly", c:"Proteins", d:"Safe and nutrient dense."},
    {n:"Leg of Lamb", s:"Friendly", c:"Proteins", d:"Safe roast option."},
    {n:"Venison (Deer)", s:"Friendly", c:"Proteins", d:"Naturally lean and very safe."},
    {n:"Elk / Bison", s:"Friendly", c:"Proteins", d:"Excellent safe alternatives to beef."},
    {n:"Rabbit", s:"Friendly", c:"Proteins", d:"Lean, mild, and safe."},

    // SEAFOOD (FRESH/FROZEN PLAIN)
    {n:"Salmon (Wild/Atlantic)", s:"Friendly", c:"Proteins", d:"Omega-3s help inflammation. No lemon."},
    {n:"Cod / Halibut / Tilapia", s:"Friendly", c:"Proteins", d:"Bland white fish is very safe."},
    {n:"Shrimp (Plain)", s:"Friendly", c:"Proteins", d:"Ensure no 'Citric Acid' wash on label."},
    {n:"Scallops", s:"Friendly", c:"Proteins", d:"Safe and non-acidic. Pan-sear in butter."},
    {n:"Lobster / Crab (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Avoid cocktail sauce/lemon."},
    {n:"Tuna Steak (Fresh)", s:"Friendly", c:"Proteins", d:"Safe. Avoid canned tuna in broth."},
    {n:"Trout / Walleye", s:"Friendly", c:"Proteins", d:"Freshwater fish are safe."},
    {n:"Mussels / Clams (Fresh)", s:"Friendly", c:"Proteins", d:"Safe if steamed in water/butter, no wine."},

    // DELI / PROCESSED (CAUTION)
    {n:"Applegate Naturals Turkey", s:"Friendly", c:"Proteins", d:"Nitrate-free. Safest deli brand."},
    {n:"Bacon (Uncured/Nitrate-Free)", s:"Caution", c:"Proteins", d:"Nitrates trigger flares. Use uncured only."},
    {n:"Boar's Head Low Sodium Turkey", s:"Caution", c:"Proteins", d:"Generally safe, but check for nitrates."},
    {n:"Rotisserie Chicken (Skinless)", s:"Caution", c:"Proteins", d:"Skin often has irritants; white meat is safe."},
    {n:"Canned Tuna (In Water)", s:"Caution", c:"Proteins", d:"Check for 'Vegetable Broth' (hidden onion/soy)."},
    {n:"Prosciutto", s:"Caution", c:"Proteins", d:"Usually just pork/salt, but very salty."},

    // THE RED LIST (AVOID)
    {n:"Pepperoni", s:"Avoid", c:"Proteins", d:"Nitrates/Spices. Huge trigger for burning."},
    {n:"Salami / Hard Salami", s:"Avoid", c:"Proteins", d:"Fermented/Cured. High nerve irritant."},
    {n:"Hot Dogs", s:"Avoid", c:"Proteins", d:"Loaded with nitrates and preservatives."},
    {n:"Spicy Sausage (Italian/Chorizo)", s:"Avoid", c:"Proteins", d:"Red pepper flakes will burn bladder neck."},
    {n:"Corned Beef / Pastrami", s:"Avoid", c:"Proteins", d:"Highly cured/peppered. Massive flare risk."},
    {n:"Soy Burgers / MorningStar", s:"Avoid", c:"Proteins", d:"Soy is a top-tier bladder irritant."},
    {n:"Tofu / Tempeh / Edamame", s:"Avoid", c:"Proteins", d:"Soy-based. Avoid during recovery."},
    {n:"Imitation Crab (Surimi)", s:"Avoid", c:"Proteins", d:"Contains dyes, sugar, and sorbitol."},
    {n:"Beef Jerky", s:"Avoid", c:"Proteins", d:"Soy sauce/Liquid smoke. Absolute trigger."},
    {n:"Liver / Organ Meats", s:"Avoid", c:"Proteins", d:"High in tyramine; triggers nerve pain."},
    {n:"Canned Chili", s:"Avoid", c:"Proteins", d:"Preservatives and hidden onion/pepper."},
    {n:"Smoked Salmon / Lox", s:"Avoid", c:"Proteins", d:"High salt and smoke are irritants."},
    {n:"Bologna", s:"Avoid", c:"Proteins", d:"Heavy nitrates and fillers."},
    {n:"Vienna Sausages", s:"Avoid", c:"Proteins", d:"Extremely processed; high salt/chemicals."},
    {n:"Pre-Marinated Supermarket Meats", s:"Avoid", c:"Proteins", d:"Usually contain soy sauce/vinegar/lemon juice."},

    // PLANT PROTEINS
    {n:"Almonds (Slivered)", s:"Friendly", c:"Proteins", d:"Safe protein crunch."},
    {n:"Cashews (Raw/Salted)", s:"Friendly", c:"Proteins", d:"Generally safe. Avoid honey-roasted."},
    {n:"Pumpkin Seeds (Pepitas)", s:"Friendly", c:"Proteins", d:"Excellent for bladder/prostate health."},
    {n:"Sunflower Seeds", s:"Friendly", c:"Proteins", d:"Safe plain/salted. Avoid flavored ones."},
    {n:"Pine Nuts", s:"Friendly", c:"Proteins", d:"Safe for pasta or salads."},
    {n:"Pistachios", s:"Friendly", c:"Proteins", d:"Safe. Stick to plain."},
    {n:"Brazil Nuts", s:"Friendly", c:"Proteins", d:"Safe in moderation."},
    {n:"Pecans", s:"Friendly", c:"Proteins", d:"Safe baseline nut."},
    {n:"Peanut Butter (Natural)", s:"Friendly", c:"Proteins", d:"Ensure no soy oil or extra sugars."},

    // MISC
    {n:"Nutritional Yeast", s:"Caution", c:"Proteins", d:"B-vitamins can irritate some bladders."},
    {n:"Chia Seeds", s:"Friendly", c:"Proteins", d:"Safe for smoothies or yogurt."},
    {n:"Flax Seeds", s:"Friendly", c:"Proteins", d:"Generally safe."}
];
