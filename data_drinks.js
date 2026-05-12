const data_drinks = [
    // WATER & HYDRATION
    {n:"Baking Soda Water", s:"Friendly", c:"Drinks", d:"1/8 tsp in 32oz RO water. Essential to neutralize acidic filtration."},
    {n:"Evian / Fiji Water", s:"Friendly", c:"Drinks", d:"Naturally alkaline (pH 7.2+); very easy on the bladder lining."},
    {n:"Coconut Water (Pure)", s:"Friendly", c:"Drinks", d:"Excellent hydration/electrolytes. Ensure no added 'Citric Acid'."},
    {n:"Spring Water", s:"Friendly", c:"Drinks", d:"Better than plain RO as it contains natural mineral buffers."},
    {n:"Voss / Essentia", s:"Friendly", c:"Drinks", d:"High pH bottled waters that help keep urine alkaline."},
    {n:"San Pellegrino", s:"Caution", c:"Drinks", d:"Low-acid, but carbonation can trigger spasms if in a flare."},
    {n:"Distilled Water", s:"Caution", c:"Drinks", d:"Stripped of minerals; can be slightly acidic. Use baking soda."},

    // TEAS (HOT & ICED)
    {n:"Chamomile Tea", s:"Friendly", c:"Drinks", d:"The 'Gold Standard' for bladder pain. Natural antispasmodic."},
    {n:"Peppermint Tea", s:"Friendly", c:"Drinks", d:"Helps relax smooth muscles in the bladder and gut."},
    {n:"Marshmallow Root Tea", s:"Friendly", c:"Drinks", d:"Nature's liquid bandage; coats the lining to stop the stinging."},
    {n:"Corn Silk Tea", s:"Friendly", c:"Drinks", d:"Traditional remedy for urethral and bladder neck burning."},
    {n:"Rooibos (Red Tea)", s:"Friendly", c:"Drinks", d:"Naturally caffeine-free and very low in tannins/acid."},
    {n:"Marshmallow Root & Corn Silk Blend", s:"Friendly", c:"Drinks", d:"Powerful combo for 'lemon on a cut' relief."},
    {n:"Iced Tea (Homemade)", s:"Avoid", c:"Drinks", d:"Even homemade black tea is high in oxalates and acid."},
    {n:"White Tea", s:"Caution", c:"Drinks", d:"Lower caffeine/acid than black tea, but still a potential trigger."},

    // COFFEE & SUBSTITUTES
    {n:"Dandy Blend", s:"Friendly", c:"Drinks", d:"Dandelion/chicory root. Zero acid, tastes like real coffee."},
    {n:"Pero / Kaffree Roma", s:"Friendly", c:"Drinks", d:"Grain-based coffee alternatives. Non-acidic and very safe."},
    {n:"Tyler's Acid-Free Coffee", s:"Caution", c:"Drinks", d:"Chemically neutralized. Safest 'real' coffee option."},
    {n:"Cold Brew Coffee", s:"Caution", c:"Drinks", d:"Less acid than hot brew, but still contains caffeine triggers."},
    {n:"Regular / Decaf Coffee", s:"Avoid", c:"Drinks", d:"High acid content burns 'raw' bladder tissue immediately."},

    // JUICES
    {n:"Pear Juice", s:"Friendly", c:"Drinks", d:"The safest juice option. Low acid and very soothing."},
    {n:"Blueberry Juice (Pure)", s:"Friendly", c:"Drinks", d:"Ensure it's not a 'blend' with apple or grape juice."},
    {n:"Apple Juice (Low Acid)", s:"Caution", c:"Drinks", d:"Test small amounts; organic/cloudy is usually better."},
    {n:"Orange / Grapefruit Juice", s:"Avoid", c:"Drinks", d:"Pure citric acid. Avoid while Botox is settling."},
    {n:"Cranberry Juice", s:"Avoid", c:"Drinks", d:"Extremely acidic. High risk for mid-stream burning."},
    {n:"Tomato Juice / V8", s:"Avoid", c:"Drinks", d:"Highly acidic and high sodium. Major flare trigger."},

    // DAIRY & ALTERNATIVES
    {n:"Cow's Milk (Whole/2%)", s:"Friendly", c:"Drinks", d:"Naturally alkaline; helps buffer stomach and bladder acid."},
    {n:"Almond / Oat / Rice Milk", s:"Friendly", c:"Drinks", d:"Safe non-dairy alternatives. Avoid Soy Milk."},
    {n:"Hot White Chocolate", s:"Friendly", c:"Drinks", d:"Safe warm drink. No caffeine like dark cocoa."},
    {n:"Vanilla Milkshake", s:"Friendly", c:"Drinks", d:"Safe treat. Avoid chocolate or citrus flavors."},

    // SODA & MISC
    {n:"Root Beer (Caffeine-Free)", s:"Caution", c:"Drinks", d:"The 'safest' soda, but bubbles can still be a risk."},
    {n:"Ginger Ale", s:"Caution", c:"Drinks", d:"Ginger is soothing, but citric acid/bubbles can flare."},
    {n:"Colas (Coke/Pepsi)", s:"Avoid", c:"Drinks", d:"Phosphoric acid and caffeine. Guaranteed trigger."},
    {n:"Diet Sodas", s:"Avoid", c:"Drinks", d:"Artificial sweeteners are known bladder neurotoxins."},
    {n:"Energy Drinks (Monster/Red Bull)", s:"Avoid", c:"Drinks", d:"Massive acid and caffeine. Absolute worst for recovery."},
    {n:"Gatorade / Powerade", s:"Avoid", c:"Drinks", d:"Citric acid and artificial dyes (Red 40) are irritants."},
    {n:"Lemonade", s:"Avoid", c:"Drinks", d:"High citric acid. Massive 'lemon on a cut' risk."},

    // ALCOHOL (LIFESTYLE)
    {n:"Sake (Unfiltered)", s:"Caution", c:"Drinks", d:"Generally the least acidic alcohol option. Dilute with water."},
    {n:"Light Lager", s:"Caution", c:"Drinks", d:"Lower acid than dark beers, but alcohol dehydrates."},
    {n:"Clear Vodka / Gin", s:"Caution", c:"Drinks", d:"Safer than brown liquors, but still a systemic irritant."},
    {n:"White Wine", s:"Avoid", c:"Drinks", d:"Extremely high acid. Causes immediate burning for most."},
    {n:"Red Wine / Champagne", s:"Avoid", c:"Drinks", d:"Sulfites and tannins make these high-level triggers."}
];
