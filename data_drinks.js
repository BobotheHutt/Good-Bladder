const data_drinks = [
    // --- SAFE HERBAL TEAS (NON-ACIDIC) ---
    {n:"Chamomile Tea", s:"Friendly", c:"Drinks", d:"The 'Gold Standard' for bladder pain. Natural antispasmodic."},
    {n:"Peppermint Tea", s:"Friendly", c:"Drinks", d:"Helps relax smooth muscles in the bladder and gut."},
    {n:"Marshmallow Root Tea", s:"Friendly", c:"Drinks", d:"Nature's liquid bandage; coats the lining to stop stinging."},
    {n:"Corn Silk Tea", s:"Friendly", c:"Drinks", d:"Traditional remedy for bladder neck and prostate burning."},
    {n:"Rooibos (Red Tea)", s:"Friendly", c:"Drinks", d:"Naturally caffeine-free and very low in tannins/acid."},
    {n:"Lemon Balm Tea", s:"Friendly", c:"Drinks", d:"Calming for the nervous system; despite the name, it is not acidic."},
    {n:"Fennel Tea", s:"Friendly", c:"Drinks", d:"Helps with digestion and is generally very bladder-safe."},
    {n:"Roasted Barley Tea (Mugicha)", s:"Friendly", c:"Drinks", d:"Nutty, coffee-like flavor. Zero acid and zero caffeine."},
    {n:"Oat Straw Tea", s:"Friendly", c:"Drinks", d:"Mild, slightly sweet, and very soothing for irritated tissues."},
    
    // --- COFFEE ALTERNATIVES ---
    {n:"Dandy Blend", s:"Friendly", c:"Drinks", d:"Dandelion/chicory root substitute. Zero acid, tastes like real coffee."},
    {n:"Pero / Kaffree Roma", s:"Friendly", c:"Drinks", d:"Grain-based coffee alternatives. Non-acidic and very safe."},
    {n:"Postum", s:"Friendly", c:"Drinks", d:"Classic roasted wheat and molasses drink. Bladder safe."},
    {n:"Tyler's Acid-Free Coffee", s:"Caution", c:"Drinks", d:"Chemically neutralized. Safest 'real' coffee option."},
    {n:"Cold Brew Coffee", s:"Caution", c:"Drinks", d:"Less acid than hot brew, but still contains caffeine triggers."},

    // --- MILK & NON-DAIRY ---
    {n:"Cow's Milk (Whole/2%)", s:"Friendly", c:"Drinks", d:"Naturally alkaline; helps buffer stomach and bladder acid."},
    {n:"Oat Milk (Plain)", s:"Friendly", c:"Drinks", d:"Very creamy and safe. Ensure no 'Citric Acid' in ingredients."},
    {n:"Almond Milk (Unsweetened)", s:"Friendly", c:"Drinks", d:"Safe non-dairy alternative. Avoid 'Vanilla' if alcohol-based."},
    {n:"Rice Milk", s:"Friendly", c:"Drinks", d:"The 'hypoallergenic' milk. Very low irritant risk."},
    {n:"Coconut Milk (Carton)", s:"Friendly", c:"Drinks", d:"Safe and non-acidic. Avoid canned 'Cream of Coconut' with additives."},
    {n:"Cashew Milk", s:"Friendly", c:"Drinks", d:"Creamy and safe. Low-acid profile."},
    {n:"Hot White Chocolate", s:"Friendly", c:"Drinks", d:"Safe warm drink. No caffeine/theobromine like dark cocoa."},
    {n:"Vanilla Milkshake", s:"Friendly", c:"Drinks", d:"Safe treat. Avoid chocolate or citrus-flavored versions."},

    // --- JUICES & FRUIT DRINKS ---
    {n:"Pear Juice / Nectar", s:"Friendly", c:"Drinks", d:"The safest juice option. Low acid and very soothing."},
    {n:"Blueberry Juice (100% Pure)", s:"Friendly", c:"Drinks", d:"Ensure it's not a 'blend' with apple or grape juice."},
    {n:"Apple Juice (Low Acid)", s:"Caution", c:"Drinks", d:"Organic/Cloudy is usually better. Test small amounts."},
    {n:"Apricot Nectar", s:"Caution", c:"Drinks", d:"Generally low-acid, but can be a trigger for some."},
    {n:"Papaya Juice", s:"Friendly", c:"Drinks", d:"Naturally contains enzymes that can be soothing for some."},

    // --- THE "CAUTION" LIST (SODA/ALCOHOL) ---
    {n:"Root Beer (Caffeine-Free)", s:"Caution", c:"Drinks", d:"The 'least bad' soda. Let it go flat to remove carbonation."},
    {n:"Ginger Ale (Real Ginger)", s:"Caution", c:"Drinks", d:"Ginger is soothing, but citric acid/bubbles can flare."},
    {n:"Sake (Filtered/Unfiltered)", s:"Caution", c:"Drinks", d:"Generally the least acidic alcohol option. Dilute with water."},
    {n:"Clear Vodka / Gin", s:"Caution", c:"Drinks", d:"Safer than brown liquors, but still a systemic irritant."},
    {n:"Whiskey / Bourbon", s:"Caution", c:"Drinks", d:"High alcohol content is dehydrating; irritates the bladder neck."},
    {n:"Light Lager", s:"Caution", c:"Drinks", d:"Lower acid than dark beers, but alcohol is still a trigger."},

    // --- THE "AVOID" LIST (TRIGGERS) ---
    {n:"Orange / Grapefruit Juice", s:"Avoid", c:"Drinks", d:"Pure citric acid. Avoid while Botox is settling."},
    {n:"Cranberry Juice", s:"Avoid", c:"Drinks", d:"Extremely acidic. High risk for mid-stream burning."},
    {n:"Regular / Decaf Coffee", s:"Avoid", c:"Drinks", d:"High acid content burns 'raw' bladder tissue immediately."},
    {n:"Black / Green Tea", s:"Avoid", c:"Drinks", d:"High caffeine and acid. Guaranteed to trigger urgency."},
    {n:"Energy Drinks (Red Bull/Monster)", s:"Avoid", c:"Drinks", d:"Massive acid and caffeine. Absolute worst for recovery."},
    {n:"Gatorade / Powerade", s:"Avoid", c:"Drinks", d:"Citric acid and artificial dyes (Red 40) are major irritants."},
    {n:"Colas (Coke/Pepsi)", s:"Avoid", c:"Drinks", d:"Phosphoric acid and caffeine. Pure bladder irritation."},
    {n:"Diet Sodas", s:"Avoid", c:"Drinks", d:"Artificial sweeteners are known bladder neurotoxins."},
    {n:"Lemonade / Limeade", s:"Avoid", c:"Drinks", d:"Pure citric acid. High 'lemon on a cut' risk."},
    {n:"Tomato Juice / V8", s:"Avoid", c:"Drinks", d:"Highly acidic and high sodium. Major flare trigger."},
    {n:"White Wine / Champagne", s:"Avoid", c:"Drinks", d:"Extremely high acid and sulfites. Guaranteed sting."},
    {n:"Red Wine", s:"Avoid", c:"Drinks", d:"Tannins and acid. High risk for nerve flares."},
    {n:"Soy Milk", s:"Avoid", c:"Drinks", d:"Soy is a top-tier bladder irritant for most patients."}
];
