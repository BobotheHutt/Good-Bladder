const data_snacks = [
    // SAVORY / SALTY (SAFE)
    {n:"Popcorn (Plain/Butter)", s:"Friendly", c:"Snacks", d:"Best savory snack. Pop your own to avoid the 'hidden' chemicals in microwave bags."},
    {n:"Pretzels (Plain)", s:"Friendly", c:"Snacks", d:"Safe and non-acidic. Avoid 'Honey Mustard' or 'Buffalo' flavors."},
    {n:"Potato Chips (Classic/Plain)", s:"Friendly", c:"Snacks", d:"Safe. Check for MSG or 'Citric Acid' in the ingredients."},
    {n:"Corn Chips / Tortilla Chips", s:"Friendly", c:"Snacks", d:"Safe if plain. Avoid 'Nacho Cheese' or 'Cool Ranch' powders."},
    {n:"Almonds (Roasted/Unsalted)", s:"Friendly", c:"Snacks", d:"The 'Gold Standard' safe nut for bladder health."},
    {n:"Cashews / Peanuts", s:"Friendly", c:"Snacks", d:"Generally very safe. Avoid 'Dry Roasted' if they have soy or yeast."},
    {n:"Pumpkin Seeds", s:"Friendly", c:"Snacks", d:"Safe and actually beneficial for bladder/prostate health."},
    {n:"Cheese Sticks (Mozzarella/Mild Cheddar)", s:"Friendly", c:"Snacks", d:"Non-aged cheeses are very safe and high protein."},
    {n:"Plain Crackers (Saltines/Soda Crackers)", s:"Friendly", c:"Snacks", d:"Excellent bland snack to buffer the stomach/bladder."},

    // SWEET TREATS (SAFE)
    {n:"White Chocolate", s:"Friendly", c:"Snacks", d:"The 'Safe' chocolate. No caffeine or cocoa solids that sting."},
    {n:"Marshmallows", s:"Friendly", c:"Snacks", d:"Safe sweet treat. Check for 'Citric Acid' on the label."},
    {n:"Caramels / Butterscotch", s:"Friendly", c:"Snacks", d:"Safe alternatives to acidic candies."},
    {n:"Honey / Maple Candy", s:"Friendly", c:"Snacks", d:"Natural sugars are much safer than artificial sweeteners."},
    {n:"Vanilla Wafers", s:"Friendly", c:"Snacks", d:"Safe and low-acid. Better than chocolate chip cookies."},
    {n:"Graham Crackers (Honey/Plain)", s:"Friendly", c:"Snacks", d:"Classic safe snack. Avoid 'Chocolate' ones."},
    {n:"Sugar Cookies / Shortbread", s:"Friendly", c:"Snacks", d:"Low-acid and safe. Avoid lemon-flavored versions."},
    {n:"Angel Food Cake", s:"Friendly", c:"Snacks", d:"Bland and safe. Top with pears or blueberries."},
    {n:"Carob Bars", s:"Friendly", c:"Snacks", d:"The 'Chocolate Substitute'. No caffeine and safe for the bladder."},
    {n:"Mints (Peppermint/Spearmint)", s:"Friendly", c:"Snacks", d:"Safe breath fresheners. Avoid 'Wintergreen' as it can be a trigger."},

    // FRUIT-BASED SNACKS (CAUTION)
    {n:"Blueberries (Fresh)", s:"Caution", c:"Snacks", d:"Safest berry, but still has natural acid. Test small amounts."},
    {n:"Apples (Gala/Fuji/Pink Lady)", s:"Caution", c:"Snacks", d:"Sweeter, low-acid varieties only. Avoid tart Green apples."},
    {n:"Pears (Peeled)", s:"Friendly", c:"Snacks", d:"The most soothing snack fruit. Perfect during a flare."},

    // THE RED LIST (AVOID)
    {n:"Chocolate (Milk/Dark/Semi-Sweet)", s:"Avoid", c:"Snacks", d:"Caffeine and theobromine irritate bladder nerves."},
    {n:"Craisins (Dried Cranberries)", s:"Avoid", c:"Snacks", d:"Pure acid. Major trigger for mid-stream burning."},
    {n:"Fruit Snacks (Mott's/Welch's)", s:"Avoid", c:"Snacks", d:"Citric acid and artificial dyes (Red 40) are huge triggers."},
    {n:"Sour Candy (Skittles/Warheads)", s:"Avoid", c:"Snacks", d:"Pure citric/malic acid. High risk for 'lemon on a cut' feeling."},
    {n:"Twizzlers / Red Dye 40", s:"Avoid", c:"Snacks", d:"Artificial dyes and preservatives are known irritants."},
    {n:"Sugar-Free Candy / Gum", s:"Avoid", c:"Snacks", d:"Artificial sweeteners (Aspartame/Saccharin) are neurotoxins for the bladder."},
    {n:"Beef Jerky", s:"Avoid", c:"Snacks", d:"Soy sauce, vinegar, and liquid smoke are absolute triggers."},
    {n:"Pickles / Olives", s:"Avoid", c:"Snacks", d:"High acid and fermentation will cause spasms."},
    {n:"Spicy Chips (Flamin' Hot/Jalapeño)", s:"Avoid", c:"Snacks", d:"Capsaicin burns the bladder neck during urination."},
    {n:"Everything Bagel Chips", s:"Avoid", c:"Snacks", d:"Raw onion and garlic are major prostate and bladder irritants."}
];
