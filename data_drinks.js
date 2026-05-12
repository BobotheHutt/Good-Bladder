const data_drinks = [
    // WATER & HYDRATION
    {n:"Baking Soda Water", s:"Friendly", c:"Drink", d:"1/8 tsp in 32oz RO water. Essential to neutralize acidic filtration."},
    {n:"Evian / Fiji Water", s:"Friendly", c:"Drink", d:"Naturally alkaline bottled waters; very easy on the bladder lining."},
    {n:"Coconut Water (Natural)", s:"Friendly", c:"Drink", d:"Pure hydration with electrolytes and no acidic additives. Very soothing."},
    {n:"Spring Water", s:"Friendly", c:"Drink", d:"Contains natural minerals that buffer acidity better than RO water."},
    {n:"San Pellegrino", s:"Caution", c:"Drink", d:"Low-acid sparkling water, but carbonation can still trigger spasms for some."},
    {n:"Distilled Water", s:"Caution", c:"Drink", d:"Can be slightly acidic due to lack of minerals; use a pinch of baking soda."},
    
    // TEAS (HOT & ICED)
    {n:"Chamomile Tea", s:"Friendly", c:"Drink", d:"The 'Gold Standard' for bladder pain. Natural antispasmodic."},
    {n:"Peppermint Tea", s:"Friendly", c:"Drink", d:"Helps relax smooth muscles in the bladder and gut."},
    {n:"Marshmallow Root Tea", s:"Friendly", c:"Drink", d:"Nature's liquid bandage; creates a protective coating on the 'veiny' lining."},
    {n:"Corn Silk Tea", s:"Friendly", c:"Drink", d:"Traditional remedy for urethral and bladder neck burning."},
    {n:"Rooibos (Red Tea)", s:"Friendly", c:"Drink", d:"Naturally caffeine-free and very low in tannins/acid."},
    {n:"White Tea (Weakly Brewed)", s:"Caution", c:"Drink", d:"Lower caffeine/acid than black tea, but still a potential trigger."},
    {n:"Black / Green Tea", s:"Avoid", c:"Drink", d:"High caffeine and acid. Guaranteed to trigger urgency/burning."},
    {n:"Iced Tea (Bottled)", s:"Avoid", c:"Drink", d:"Loaded with citric acid and preservatives. Avoid entirely."},
    
    // COFFEE & SUBSTITUTES
    {n:"Dandy Blend", s:"Friendly", c:"Drink", d:"Dandelion/chicory root substitute. Zero acid, tastes remarkably like coffee."},
    {n:"Pero / Postum / Kaffree Roma", s:"Friendly", c:"Drink", d:"Grain-based coffee alternatives. Non-acidic and bladder-safe."},
    {n:"Tyler's Acid-Free Coffee", s:"Caution", c:"Drink", d:"Chemically neutralized. Best 'real' coffee option, but use sparingly."},
    {n:"Cold Brew Coffee", s:"Caution", c:"Drink", d:"67% less acid than hot brew, but still contains caffeine triggers."},
    {n:"Regular / Decaf Coffee", s:"Avoid", c:"Drink", d:"High acid content burns the 'cuts' in the bladder lining."},
    
    // JUICES
    {n:"Pear Juice", s:"Friendly", c:"Drink", d:"The safest juice option. Low acid and very soothing."},
    {n:"Blueberry Juice (Pure)", s:"Friendly", c:"Drink", d:"Safe as long as it's not a 'blend' with apple or grape juice."},
    {n:"Apple Juice (Low Acid/Organic)", s:"Caution", c:"Drink", d:"Test small amounts; some brands are still quite sharp."},
    {n:"Orange / Grapefruit Juice", s:"Avoid", c:"Drink", d:"Pure citric acid. Avoid while healing from Botox."},
    {n:"Cranberry Juice", s:"Avoid", c:"Drink", d:"Extremely acidic. High risk for that mid-stream 'lemon on a cut' feeling."},
    {n:"Tomato Juice / V8", s:"Avoid", c:"Drink", d:"Highly acidic and high sodium. Major flare trigger."},
    
    // MILK & DAIRY DRINKS
    {n:"Cow's Milk (Whole/2%)", s:"Friendly", c:"Drink", d:"Naturally alkaline; excellent for buffering stomach and bladder acid."},
    {n:"Almond / Oat / Rice Milk", s:"Friendly", c:"Drink", d:"Safe non-dairy alternatives. Avoid Soy Milk (can be a trigger)."},
    {n:"Vanilla Milkshake", s:"Friendly", c:"Drink", d:"Safe treat. Avoid chocolate or fruit-acid flavors."},
    {n:"Hot White Chocolate", s:"Friendly", c:"Drink", d:"Safe warm drink. No caffeine/theobromine like dark chocolate."},
    
    // SODA & MISC
    {n:"Root Beer (Caffeine-Free)", s:"Caution", c:"Drink", d:"The 'safest' soda, but carbonation is still a risk. Let it go flat first."},
    {n:"Ginger Ale", s:"Caution", c:"Drink", d:"Ginger is soothing, but the citric acid/bubbles can trigger flares."},
    {n:"Colas / Diet Sodas", s:"Avoid", c:"Drink", d:"Caffeine, carbonation, and artificial sweeteners are a triple-threat."},
    {n:"Energy Drinks (Monster/Red Bull)", s:"Avoid", c:"Drink", d:"Massive levels of acid and caffeine. Absolute worst for Botox recovery."},
    {n:"Gatorade / Powerade", s:"Avoid", c:"Drink", d:"Citric acid and artificial dyes (Red 40) are major irritants."},
    
    // ALCOHOL (FOR LATER)
    {n:"Sake (Unfiltered/Nigori)", s:"Caution", c:"Drink", d:"Generally the least acidic alcohol option. Dilute with water/ice."},
    {n:"Light Lager / Pilsner", s:"Caution", c:"Drink", d:"Lower acid than dark beers, but alcohol is a systemic irritant."},
    {n:"Whiskey / Gin / Vodka", s:"Caution", c:"Drink", d:"Clear liquors are safer than brown, but high alcohol content dehydrates."},
    {n:"White Wine (Dry)", s:"Avoid", c:"Drink", d:"Extremely high acid. Almost guaranteed to sting the bladder."},
    {n:"Red Wine / Champagne", s:"Avoid", c:"Drink", d:"Sulfites, tannins, and bubbles make this a high-level trigger."}
];
