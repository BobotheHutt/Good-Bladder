const data_sides = [
    // --- RICE, GRAINS & STARCHES ---
    {n:"White Rice (Jasmine/Basmati)", s:"Friendly", c:"Sides", d:"The ultimate bladder-safe side. Non-acidic and very easy to digest."},
    {n:"White Rice (Long Grain)", s:"Friendly", c:"Sides", d:"Perfect neutral base for any safe protein."},
    {n:"Quinoa (White/Red)", s:"Friendly", c:"Sides", d:"High protein grain. Generally non-irritating for the bladder."},
    {n:"Couscous", s:"Friendly", c:"Sides", d:"Bland and safe. Great for soaking up butter or safe juices."},
    {n:"Barley", s:"Friendly", c:"Sides", d:"Soothing grain; often used to calm internal inflammation."},
    {n:"Millet", s:"Friendly", c:"Sides", d:"Safe ancient grain alternative to rice or wheat."},
    {n:"Amaranth", s:"Friendly", c:"Sides", d:"Low-acid, high-protein grain. Very safe."},
    {n:"Wild Rice (Plain)", s:"Friendly", c:"Sides", d:"Safe, but ensure it's not pre-mixed with 'spicy' seasoning packets."},
    {n:"Brown Rice", s:"Caution", c:"Sides", d:"Higher fiber can be a minor irritant for some during a flare."},
    {n:"Buckwheat (Kasha)", s:"Friendly", c:"Sides", d:"Naturally gluten-free and generally bladder-safe."},

    // --- POTATOES & ROOT VEGGIES ---
    {n:"Potatoes (Russet/Gold/Red)", s:"Friendly", c:"Sides", d:"Non-acidic and filling. Best served with butter or salt."},
    {n:"Mashed Potatoes (Homemade)", s:"Friendly", c:"Sides", d:"Safe if made with milk/butter. No store-bought gravy."},
    {n:"Sweet Potatoes / Yams", s:"Friendly", c:"Sides", d:"Very safe. Avoid heavy cinnamon if nerves are sensitive."},
    {n:"Hash Browns (Plain)", s:"Friendly", c:"Sides", d:"Safe if fried in clean oil. Check for additives in frozen bags."},
    {n:"Tater Tots (Plain)", s:"Caution", c:"Sides", d:"Generally safe, but check for 'hidden' onion powder in the breading."},
    {n:"Parsnips", s:"Friendly", c:"Sides", d:"Non-acidic root vegetable. Safe alternative to carrots."},
    {n:"Beets (Fresh/Roasted)", s:"Caution", c:"Sides", d:"Generally safe, but can turn urine red (don't confuse with blood)."},
    {n:"Turnips", s:"Friendly", c:"Sides", d:"Safe and bland when roasted or mashed."},

    // --- PASTA & NOODLES ---
    {n:"Pasta (White/Egg Noodles)", s:"Friendly", c:"Sides", d:"Safe baseline. Use butter, oil, or Alfredo (no tomato)."},
    {n:"Rice Noodles", s:"Friendly", c:"Sides", d:"Extremely safe; great for stir-fries with safe veggies."},
    {n:"Macaroni (Plain)", s:"Friendly", c:"Sides", d:"Safe. Pair with safe white cheddar or butter."},
    {n:"Pasta (Whole Wheat)", s:"Caution", c:"Sides", d:"Generally safe, but the extra hull can be a minor trigger for some."},
    {n:"Gnocchi (Potato based)", s:"Friendly", c:"Sides", d:"Safe and filling. Serve with butter and sage."},

    // --- FRESH VEGETABLES ---
    {n:"Zucchini / Yellow Squash", s:"Friendly", c:"Sides", d:"High water content; very soothing for the lining."},
    {n:"Carrots (Steamed/Roasted)", s:"Friendly", c:"Sides", d:"Naturally sweet and non-acidic. Very safe."},
    {n:"Cucumber (Peeled)", s:"Friendly", c:"Sides", d:"Hydrating and cooling for a burning bladder."},
    {n:"Broccoli (Steamed)", s:"Friendly", c:"Sides", d:"Safe vegetable choice. Avoid heavy processed cheese sauces."},
    {n:"Cauliflower", s:"Friendly", c:"Sides", d:"Safe alternative to rice or potatoes."},
    {n:"Mushrooms (Fresh)", s:"Friendly", c:"Sides", d:"Safe and non-acidic. Sauté in butter."},
    {n:"Green Beans / Peas", s:"Friendly", c:"Sides", d:"Safe baseline vegetables for any meal."},
    {n:"Asparagus", s:"Caution", c:"Sides", d:"Can cause urine odor and minor irritation for some."},
    {n:"Spinach / Kale (Cooked)", s:"Friendly", c:"Sides", d:"Anti-inflammatory. High in oxalates (caution if you get stones)."},
    {n:"Celery (Cooked)", s:"Friendly", c:"Sides", d:"Non-acidic and hydrating."},
    {n:"Brussels Sprouts", s:"Caution", c:"Sides", d:"Generally safe, but can cause gas/pressure for some."},
    {n:"Cabbage (Cooked)", s:"Friendly", c:"Sides", d:"Safe. Avoid raw cabbage or coleslaw."},

    // --- BREADS & DOUGHS ---
    {n:"White Bread / French Bread", s:"Friendly", c:"Sides", d:"Safe and bland. Great for buffering the stomach."},
    {n:"Dinner Rolls", s:"Friendly", c:"Sides", d:"Safe. Stick to plain butter, avoid honey-mustard butter."},
    {n:"Garlic Bread (Butter only)", s:"Friendly", c:"Sides", d:"Safe if there is no red sauce or heavy onion/spice."},
    {n:"Cornbread (Plain)", s:"Friendly", c:"Sides", d:"Safe as long as it's not 'Jalapeño' cornbread."},
    {n:"Naan (Plain)", s:"Friendly", c:"Sides", d:"Safe if not 'Garlic Naan' which often has raw bits."},

    // --- THE RED LIST (AVOID) ---
    {n:"Tomatoes (All Forms)", s:"Avoid", c:"Sides", d:"Pure acid. Will trigger 'lemon on a cut' feeling instantly."},
    {n:"Onions (Raw)", s:"Avoid", c:"Sides", d:"Major prostate and bladder irritant. Avoid entirely."},
    {n:"Pickles / Sauerkraut", s:"Avoid", c:"Sides", d:"Acidic and fermented. High risk for spasms/frequency."},
    {n:"Spicy Peppers (Jalapeños)", s:"Avoid", c:"Sides", d:"Capsaicin will burn the urethra during flow."},
    {n:"Potato Salad (Store Bought)", s:"Avoid", c:"Sides", d:"Vinegar and mustard in the dressing are major triggers."},
    {n:"Coleslaw", s:"Avoid", c:"Sides", d:"Vinegar and raw cabbage/onion are high-risk."},
    {n:"Refried Beans (Canned)", s:"Avoid", c:"Sides", d:"Often contains lard, spices, and onion powder."},
    {n:"Soy-Based Sides (Edamame)", s:"Avoid", c:"Sides", d:"Soy is a top-tier bladder irritant for most."},
    {n:"Baked Beans", s:"Avoid", c:"Sides", d:"High sugar, vinegar, and often onion powder/bacon."},
    {n:"Spanish / Mexican Rice", s:"Avoid", c:"Sides", d:"Usually tomato-based with heavy onion and spice."}
];
