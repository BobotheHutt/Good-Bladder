const data_sides = [
    // THE SAFE ZONE (WHITE STARCHES)
    {n:"White Rice (Jasmine/Basmati)", s:"Friendly", c:"Sides", d:"The ultimate bladder-safe side. Neutral pH and zero irritation."},
    {n:"Potatoes (Russet/Gold)", s:"Friendly", c:"Sides", d:"Non-acidic and filling. Best served with butter or a little salt."},
    {n:"Sweet Potatoes / Yams", s:"Friendly", c:"Sides", d:"Very safe. Avoid adding heavy cinnamon or brown sugar if sensitive."},
    {n:"Pasta (White/Egg Noodles)", s:"Friendly", c:"Sides", d:"Safe if served with butter, olive oil, or Alfredo sauce (no tomato)."},
    {n:"Couscous", s:"Friendly", c:"Sides", d:"Bland and safe grain alternative."},
    {n:"Quinoa (White/Red)", s:"Friendly", c:"Sides", d:"Good protein-heavy grain. Generally very safe."},
    {n:"Polenta / Cornmeal", s:"Friendly", c:"Sides", d:"Safe and non-acidic. Avoid 'spicy' corn mixes."},
    {n:"Barley", s:"Friendly", c:"Sides", d:"Soothing grain; often used in soups to calm the gut."},

    // VEGETABLES (SOOTHING)
    {n:"Zucchini / Yellow Squash", s:"Friendly", c:"Sides", d:"Very high water content and low acid. Extremely safe."},
    {n:"Carrots (Steamed/Roasted)", s:"Friendly", c:"Sides", d:"Naturally sweet and non-acidic."},
    {n:"Cucumber (Peeled)", s:"Friendly", c:"Sides", d:"Hydrating and neutral. Great for cooling a 'burning' bladder."},
    {n:"Broccoli (Steamed)", s:"Friendly", c:"Sides", d:"Safe vegetable choice. Avoid heavy cheese sauces with preservatives."},
    {n:"Mushrooms (Fresh)", s:"Friendly", c:"Sides", d:"Safe and non-acidic. Sauté in butter."},
    {n:"Green Beans", s:"Friendly", c:"Sides", d:"Safe baseline vegetable."},
    {n:"Asparagus", s:"Caution", c:"Sides", d:"Can cause urine odor and minor irritation for some during a flare."},
    {n:"Peas", s:"Friendly", c:"Sides", d:"Generally safe and mild."},
    {n:"Cauliflower", s:"Friendly", c:"Sides", d:"Safe alternative to potatoes or rice."},
    {n:"Spinach / Kale (Cooked)", s:"Friendly", c:"Sides", d:"Anti-inflammatory, but high in oxalates (caution if you get stones)."},

    // THE CAUTION ZONE
    {n:"Brown Rice", s:"Caution", c:"Sides", d:"High fiber is good, but can be harder on the gut for some during recovery."},
    {n:"Avocado", s:"Caution", c:"Sides", d:"Contains tyramine; can trigger nerve sensitivity in some patients."},
    {n:"Corn (Fresh/Frozen)", s:"Caution", c:"Sides", d:"Generally safe, but can be a minor irritant if you have an active UTI."},
    {n:"Onions (Cooked)", s:"Caution", c:"Sides", d:"Much safer than raw, but can still trigger sensitivity in high amounts."},
    {n:"Garlic (Roasted)", s:"Friendly", c:"Sides", d:"Less 'bite' than raw; usually safe for flavoring sides."},

    // THE RED LIST (AVOID)
    {n:"Tomatoes (All Forms)", s:"Avoid", c:"Sides", d:"Pure acid. Will trigger the 'lemon on a cut' feeling instantly."},
    {n:"Onions (Raw)", s:"Avoid", c:"Sides", d:"Major bladder and prostate irritant. Avoid on burgers/salads."},
    {n:"Pickles / Sauerkraut", s:"Avoid", c:"Sides", d:"Acidic and fermented. High risk for bladder spasms."},
    {n:"Spicy Peppers (Jalapeños/Chilis)", s:"Avoid", c:"Sides", d:"Capsaicin burns the bladder neck during the 'mid-stream' flow."},
    {n:"Refried Beans (Canned)", s:"Avoid", c:"Sides", d:"Often contains lard, spices, and onion powder; high flare risk."},
    {n:"Soy-Based Sides (Edamame)", s:"Avoid", c:"Sides", d:"Soy is a top-tier bladder irritant for most."},
    {n:"Potato Salad (Store Bought)", s:"Avoid", c:"Sides", d:"Vinegar and mustard in the dressing are major triggers."},
    {n:"Coleslaw", s:"Avoid", c:"Sides", d:"Vinegar and raw cabbage/onion are high-risk."},
    {n:"Mac Salad", s:"Avoid", c:"Sides", d:"Usually contains vinegar and mayo (lemon juice)."},

    // BREADS
    {n:"White Bread / Rolls", s:"Friendly", c:"Sides", d:"Safe and bland."},
    {n:"Garlic Bread (Butter only)", s:"Friendly", c:"Sides", d:"Safe if there is no red sauce or heavy spice."},
    {n:"Cornbread", s:"Friendly", c:"Sides", d:"Safe as long as it's not 'Jalapeño' cornbread."},
    {n:"French / Italian Bread", s:"Friendly", c:"Sides", d:"Safe baseline breads."}
];
