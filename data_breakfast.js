const data_breakfast = [
    // OATS & GRAINS
    {n:"Oatmeal (Old Fashioned/Steel Cut)", s:"Friendly", c:"Breakfast", d:"Best bladder baseline. Naturally low acid and soothing."},
    {n:"Cream of Wheat", s:"Friendly", c:"Breakfast", d:"Bland and safe. Use milk to further buffer the pH."},
    {n:"Grits (Plain)", s:"Friendly", c:"Breakfast", d:"Very safe. Avoid adding instant 'hot' seasonings."},
    {n:"Granola (Honey/Nut)", s:"Friendly", c:"Breakfast", d:"Safe if it doesn't contain dried fruits or chocolate chips."},
    {n:"Rice Krispies / Rice Chex", s:"Friendly", c:"Breakfast", d:"Low-acid, low-sugar cereals are very safe."},
    {n:"Corn Flakes", s:"Friendly", c:"Breakfast", d:"Safe cereal choice. Stick to real milk, avoid soy milk."},
    {n:"Kashi 7 Whole Grain Cereal", s:"Friendly", c:"Breakfast", d:"High fiber and generally low-irritant."},
    {n:"Pancakes / Waffles (Plain)", s:"Friendly", c:"Breakfast", d:"Safe choice. Use pure maple syrup instead of fruit syrup."},
    {n:"French Toast (Plain)", s:"Friendly", c:"Breakfast", d:"Safe if made with basic bread/eggs. Skip the cinnamon if sensitive."},
    {n:"Bagels (Plain/Blueberry)", s:"Friendly", c:"Breakfast", d:"Safe bread choice. Blueberry is usually safe."},
    {n:"Toast (White/Wheat)", s:"Friendly", c:"Breakfast", d:"Standard safe choice. Avoid 'Everything' bagels (onions)."},
    {n:"English Muffin", s:"Friendly", c:"Breakfast", d:"Safe bread alternative to toast."},
    {n:"Malt-O-Meal (Plain)", s:"Friendly", c:"Breakfast", d:"Similar to Cream of Wheat; very safe and bland."},
    {n:"Barley Cereal", s:"Friendly", c:"Breakfast", d:"Great low-acid alternative to oats."},

    // EGGS & PROTEINS
    {n:"Eggs (Scrambled/Boiled/Poached)", s:"Friendly", c:"Breakfast", d:"Excellent protein source. Low-irritant and highly safe."},
    {n:"Hard Boiled Eggs", s:"Friendly", c:"Breakfast", d:"Easy on-the-go safe protein."},
    {n:"Egg Whites (Carton)", s:"Friendly", c:"Breakfast", d:"Check for preservatives; pure is best."},
    {n:"Bacon (Nitrate-Free)", s:"Caution", c:"Breakfast", d:"Nitrates are the trigger. Only eat brands like Applegate Naturals."},
    {n:"Sausage (Mild/Turkey)", s:"Caution", c:"Breakfast", d:"Check for 'spicy' or 'red pepper' ingredients. Avoid spicy links."},
    {n:"Breakfast Ham (Uncured)", s:"Caution", c:"Breakfast", d:"Safe if uncured. Avoid high-salt honey hams."},
    {n:"Steak and Eggs", s:"Friendly", c:"Breakfast", d:"Safe if steak is fresh and not heavily peppered."},

    // DAIRY & SPREADS
    {n:"Milk (Cow/Oat/Almond)", s:"Friendly", c:"Breakfast", d:"Alkaline/Neutral. Helps buffer the acids."},
    {n:"Yogurt (Plain)", s:"Friendly", c:"Breakfast", d:"Less acidic than Greek or flavored versions."},
    {n:"Cottage Cheese", s:"Friendly", c:"Breakfast", d:"Non-acidic and high protein. Very safe."},
    {n:"Ricotta Cheese", s:"Friendly", c:"Breakfast", d:"Very safe and mild. Good on toast with honey."},
    {n:"Cream Cheese", s:"Friendly", c:"Breakfast", d:"Non-acidic and safe. Best topping for bagels right now."},
    {n:"Butter", s:"Friendly", c:"Breakfast", d:"Neutral fat; safe for toast and oats."},
    {n:"Honey", s:"Friendly", c:"Breakfast", d:"The safest sweetener for your oatmeal or yogurt."},
    {n:"Maple Syrup (Pure)", s:"Friendly", c:"Breakfast", d:"Safe sweetener. Avoid 'pancake syrup' with high corn syrup."},
    {n:"Almond Butter", s:"Friendly", c:"Breakfast", d:"Better than peanut butter for many; clean and non-acidic."},
    {n:"Greek Yogurt (Vanilla)", s:"Caution", c:"Breakfast", d:"Naturally more acidic than regular yogurt. Check for alcohol in vanilla."},
    {n:"Cashew Butter", s:"Friendly", c:"Breakfast", d:"Very low acid and safe."},
    
    // FRUITS & TOPPINGS
    {n:"Pears (Fresh/Peeled)", s:"Friendly", c:"Breakfast", d:"The 'Gold Standard' safe fruit. Add to oatmeal for flavor."},
    {n:"Bananas", s:"Friendly", c:"Breakfast", d:"Low acid and very safe."},
    {n:"Blueberries (Fresh)", s:"Caution", c:"Breakfast", d:"Safest berry, but can sting if the bladder is extra 'veiny'."},
    {n:"Apples (Gala/Fuji)", s:"Caution", c:"Breakfast", d:"Sweeter apples are safer than tart ones like Granny Smith."},
    {n:"Melon (Honeydew/Cantaloupe)", s:"Friendly", c:"Breakfast", d:"Very alkaline and soothing."},
    {n:"Pumpkin Seeds", s:"Friendly", c:"Breakfast", d:"Safe crunch to add to yogurt or oats."},
    {n:"Almonds (Slivered)", s:"Friendly", c:"Breakfast", d:"Low-acid nut; safe for oatmeal topping."},
    {n:"Chia Seeds", s:"Friendly", c:"Breakfast", d:"Safe for thickening oats or yogurt."},
    {n:"Coconut Flakes (Unsweetened)", s:"Friendly", c:"Breakfast", d:"Safe addition to granola or yogurt."},

    // THE RED LIST (AVOID)
    {n:"Craisins (Dried Cranberries)", s:"Avoid", c:"Breakfast", d:"Pure acid. Major trigger for mid-stream sharp burn."},
    {n:"Dried Fruit (General)", s:"Avoid", c:"Breakfast", d:"Preservatives and concentrated sugar/acid are high risk."},
    {n:"Strawberries / Raspberries", s:"Avoid", c:"Breakfast", d:"High acid content. Avoid while healing."},
    {n:"Citrus (Oranges/Grapefruit)", s:"Avoid", c:"Breakfast", d:"Pure citric acid. Avoid entirely during flares."},
    {n:"Orange Juice", s:"Avoid", c:"Breakfast", d:"Liquid fire for a sensitive bladder. Do not drink."},
    {n:"Coffee (Regular)", s:"Avoid", c:"Breakfast", d:"High acid and caffeine. Guaranteed to sting."},
    {n:"Tomato Juice", s:"Avoid", c:"Breakfast", d:"Highly acidic; guaranteed flare trigger."},
    {n:"Vanilla Extract", s:"Avoid", c:"Breakfast", d:"Alcohol-based extracts are bladder neck irritants."},
    {n:"Hot Sauce / Ketchup", s:"Avoid", c:"Breakfast", d:"Vinegar and spice are the main triggers for pain."},
    {n:"Cinnamon", s:"Caution", c:"Breakfast", d:"Can be an irritant in large amounts for some."},
    {n:"Spicy Omelets (Salsa/Peppers)", s:"Avoid", c:"Breakfast", d:"Capsaicin will burn your bladder neck."},
    {n:"Chocolate Chips", s:"Avoid", c:"Breakfast", d:"Caffeine/theobromine will irritate bladder nerves."},

    // BRANDS & RECOVERY
    {n:"Applegate Naturals Bacon", s:"Friendly", c:"Breakfast", d:"No nitrates. One of the few safe meat brands."},
    {n:"Bob’s Red Mill Oats", s:"Friendly", c:"Breakfast", d:"Clean and high quality. Good baseline food."},
    {n:"Annie's White Cheddar Mac", s:"Friendly", c:"Breakfast", d:"Great 'breakfast for lunch' safe option."},
    {n:"Desert Harvest Aloe Vera", s:"Friendly", c:"Breakfast", d:"Take with breakfast to coat the bladder lining."},
    {n:"Prelief", s:"Friendly", c:"Breakfast", d:"Neutralize acid by taking 2 with your first bite."},
    {n:"Baking Soda Pinch", s:"Friendly", c:"Breakfast", d:"Add to morning water to stop the sting."}
];
