import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function CatalogPage() {
  React.useEffect(() => {
    document.title = 'Catalog | Maison Pācem';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center justify-center">
              <img 
                src="/pacempp.jpg" 
                alt="Maison Pācem" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Full Width */}
        <div className="mb-8">
          <h3 className="text-sm font-bold mb-4 tracking-wide">WELCOME</h3>
          <p className="text-xs leading-relaxed max-w-4xl">
            Welcome ladies. Here is the catalog I've been raving about on my pinterest pins... and tiktoks. I thought browsing a page like this would be better and just easier than scrolling through my pins, not being sure which one of the items in the picture would be linked this time. As you know, everything here is from Amazon. Nothing below a 4-star rating. Happy shopping, happy decorating. <em>- Sayce</em>
          </p>
          <p className="text-xs italic text-gray-500 mt-2">
            *Commissions may be earned.
          </p>
        </div>

        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-64 pr-8">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">CATÉGORIES</h3>
              <div className="space-y-2 text-sm">
                <div>"LA SÉLECTION VARIÉE"</div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-end mb-8">
              <div className="text-sm">
                <span className="mr-4">TRIER</span>
                <select className="border-none bg-transparent text-sm">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* First Product - Tabletop Water Fountain */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/fancyfountaindecor.jpg"
                    alt="Tabletop Water Fountain"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Tabletop Water Fountain</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Compact tabletop fountain with a three-tier design, natural river rocks, a deep basin and soft lighting. For creating a relaxing mood in any room or hall. Features a quiet pump with an on/off switch and easy setup.</p>
                <a 
                  href="https://www.amazon.com/Homedics-Tabletop-Water-Fountain-Soothing/dp/B000QTUJXS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7dd5629259de22b5b7f63a9c965ecc3e&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Second Product - Bubble Throw Blanket */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/rabbitfurthrow.png"
                    alt="The Yearly Favorite: The Bubble Throw Blanket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">The Bubble Throw Blanket</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Plush faux rabbit fur throw with a soft 3D bubble texture on one side and smooth, ultra-soft fur on the other. Warm, cozy, anti-shedding—for snuggling and decor.</p>
                <a 
                  href="https://www.amazon.com/BENVWE-Blanket-Fleece-Bubble-Fluffy/dp/B0CGM57YFQ?pd_rd_w=LbhLW&content-id=amzn1.sym.679481c3-2bf4-4843-80c0-ffb319282e84%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=679481c3-2bf4-4843-80c0-ffb319282e84&pf_rd_r=W103DQ19YNVZ8AQHX7Q3&pd_rd_wg=HWQoW&pd_rd_r=86571db8-2fd2-416e-9185-21f055141e5d&pd_rd_i=B0CGM57YFQ&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d414ac45b70c97f71920cdfe3158591b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Empty product containers */}
              {/* Third Product - L'Olivier */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/theolivetreefinal.png"
                    alt="L'Olivier"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">L'Olivier</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux olive tree with a natural wood trunk, lifelike leaves, and realistic olives. Comes in a sturdy pot, easy to place as is or slip into a planter. No watering or upkeep—just shape the branches to your liking and dust every once in a while.</p>
                <a 
                  href="https://www.amazon.com/Kazeila-Artificial-Office-Natural-Lifelike/dp/B0BKRFBSTF?crid=2HRCQ2K70RQSV&dib=eyJ2IjoiMSJ9.sC_u9ScCO97iF2uE4mjUTheu0-zSuN-fEY4XIdt7QyY6jO3vkM4OpmwAWBs4R5yVZUvIC4Zf8Sp85Xxz_Yhuc77pBm-Ek0idYs1YsAlKCfo.AYBHMo1VauNHY9dab4uhTkM_FiwtIw_j_INtWg8MfWk&dib_tag=se&keywords=kazeil%2Bfaux%2Btree%2Bolivier&qid=1754943935&sprefix=kazeil%2Bfaux%2Btree%2Bolivier%2B%2Caps%2C82&sr=8-6&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=71beb6d1e54b94ccc21491ab70da007b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Fourth Product - The Basket */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/largestoragebasket.png"
                    alt="The Basket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">The Basket</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Large cotton rope storage basket handmade from 100% natural, chemical-free materials—soft, sturdy, and safe for kids and pets. For storing blankets, pillows, laundry, or toys. Folds for easy wash and pops back into shape when filled.</p>
                <a 
                  href="https://www.amazon.com/KAKAMAY-Blanket-Baskets-storage-Laundry/dp/B09Z2SYJQD?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7b1f7e7f221e1d5f45c2f434f888da9b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Fifth Product - The Small Trio */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/triominivase.png"
                    alt="The Small Trio"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">The Small Trio</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Set of three ceramic vases in soft beige and gray matte tones, with simple, smooth lines. Easy to style anywhere. Comes safely packaged.</p>
                <a 
                  href="https://www.amazon.com/Smiletag-Ceramic-Farmhouse-Bookshelf-Entryway/dp/B0BD7FG9HX?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d8099c8e991ebda0c644a81a43a24da5&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Sixth Product - Marble Bowl */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/marblebowl.png"
                    alt="100% Natural, Heavy Marble Ruffle Bowl"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">100% Natural, Heavy Marble Ruffle Bowl</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Hand-carved from a single piece of 100% natural heavy marble, food-safe. Each bowl is unique. Several sizes and sets are available for order, so make sure you don't miss that. 30-day refund/replacement option available but you need to cover return shipping cost which is rather expensive. Good packaging. Gifting options available at checkout. This piece is more often a hit than a miss but when it's a hit, it's a hit. I recommend larger sizes, smaller sizes can look good as well depending on your personal need/taste.</p>
                <a 
                  href="https://www.amazon.com/Marble-Fruit-Decorative-Ruffle-Floral/dp/B0BW7QLRXY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=fa0df63704f80aa00921fe260f3bd8ff&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Seventh Product - Large Ceramic Rustic Vase */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/vaseluxenoir.png"
                    alt="Large Ceramic Rustic Vase"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Large Ceramic Rustic Vase</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Tall, charcoal/bronze, accent ceramic vase. The inside of the vase has a waterproof coating. Each piece is handmade and unique. Non-slip: There are four circular pads at the bottom (which also help prevent damage to your furniture) and a flat base design feature to stabilize the vase—it's hard for it to fall. A majority of incredible reviews for this piece, one lady saying: « I always shop for the best bang for the buck and ratings, so trust me when I say, I've done all the work for you. »</p>
                <a 
                  href="https://www.amazon.com/Vaseking-Minimalist-Decorative-Farmhouse-Decoration/dp/B0CW2JG3JN?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=6770b4f8221cdf6f3ecd13c212483e83&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Eighth Product - Large Contemporary Mushroom Lamp */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/lampeclasse.png"
                    alt="Large, Contemporary Mushroom Lamp (Brass)"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Large, Contemporary Mushroom Table Lamp</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Brass-finished table lamp with a 9.5" metal globe shade—tiltable to your preference. 14" tall with a built-in USB port and dimmer roulette that lets you warm or brighten the light to your liking easily. Comes with a long-lasting 9W LED bulb (equal to 60W incandescent but uses 90% less energy, this basically means a LED bulb helps you save on electricity bills without reducing lighting performance), rated to last up to 20 years with normal use (around 3 hours per day would be considered normal use), so no need to buy or replace bulbs—this lamp requires minimal upkeep, simply switch it on or off. Each lamp includes Brightech's 3-year warranty—covering defects, malfunctions, or sudden failures—so at worst, you're fully covered. Most buyers find it both functional and beautiful. Good packaging. Simple setup. This would be considered an excellent dupe for the designer piece, quality-wise and price-wise.</p>
                <a 
                  href="https://www.amazon.com/Brightech-Contemporary-Mushroom-Dimmable-Bedroom/dp/B0C2VT9TJY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=570f5a4bd14f7625b9bef13f5cf24c17&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Ninth Product - Cream White Pillow Cases */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/pillowcovers.png"
                    alt="Cream White, Soft Corduroy Pillow Cases"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Cream White, Soft Corduroy Pillow Cases</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Set of four 18x18" pillow covers made from soft corduroy with a stripe design. Each has a hidden zipper to keep inserts secure while still maintaining a clean look. Durable stitching, shrink-resistant fabric, and easy care—machine wash on gentle and tumble dry low. Inserts not included with purchase, you need your own filling/pillows to use these corduroy covers on. 27 varying color bundles available. Good value if you need multiple covers at once; and at worst, if the color doesn't suit, all returns are free for this item, so you get a full refund. Most buyers are pleased with the quality and rich colors.</p>
                <a 
                  href="https://www.amazon.com/MIULEE-Corduroy-Decorative-Striped-Farmhouse/dp/B0CVVW727H?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=52a598a13c608cd7dafadeb942f7da0e&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Tenth Product - Cream White Bathroom Countertop Accessories */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/bathroomset.png"
                    alt="Cream White, Bathroom Countertop Accessories"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Cream White, Bathroom Countertop Accessories</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Four-piece ceramic bathroom set in a matte, neutral, smooth finish. Includes: a soap/lotion dispenser with a matte black pump, toothbrush holder/cup, cotton swab jar and soap dish—all coordinated. Scratch-resistant, easy to wipe down clean (if you have a busy bathroom) and dishwasher safe. Packaged for gifting. I notice most buyers are particularly pleased with the quality of this set. Texture, smooth finish, overall appearance and functionality are mentioned in almost every review.</p>
                <a 
                  href="https://www.amazon.com/Ceramic-Bathroom-Accessories-Set-Pcs/dp/B0DJM6FMSP?ie=UTF8&linkCode=ll1&tag=maisonpacem05-20&linkId=b63c66b0fe29f6dea31324e7710a5c29&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Eleventh Product - Cream White, Accent Throw Pillow */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/ballaccent.png"
                    alt="Cream White, Accent Throw Pillow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Cream White, Accent Throw Pillow</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Soft bouclé ball pillow filled with PP cotton* for a full, springy shape that won't flatten with use. 11.8" in diameter. Comes vacuum-packed; give it 24–48 hours to fluff back to shape. Rather easy to clean—wipe with a damp cloth when possible, or machine wash when necessary on a gentle cycle with cold water, and preferably inside a laundry bag or pillowcase to protect the fabric. *The PP cotton filling is synthetic (not natural cotton), so it doesn't clump or rot the way real cotton would when wet. Let it dry naturally in a well-ventilated space, turning it occasionally so the filling dries evenly. Some people use a low tumble-dry no-heat setting with dryer balls to help fluff it back up. Don't gut it, these pillows aren't designed to be opened and refilled. Once you take the stuffing out, it's hard to get the shape back. From what I see, the majority are pleased with the look and softness of these. There are mixed feelings about their shape retention—some say it maintains its shape, but some say it doesn't hold it too well. So consider this more a décor piece, made for occasional use.</p>
                <a 
                  href="https://www.amazon.com/Gerlisay-Spherical-Pillows-Cushion-Ornament/dp/B0CJ2NGZL4?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=a15c28540e48a9f3ac2a9a53c6b4f6f4&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Twelfth Product - "Swirl" Soy Wax Decor Candle */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/swirlcandle.png"
                    alt='"Swirl" Soy Wax Decor Candle'
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">"Swirl" Soy Wax Decor Candle</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Handmade swirl candle crafted from 100% natural soy wax. Scented with sandalwood, fresh spices and a hint of cocoa. Non-toxic, paraffin-free, and eco-friendly—safe for those with sensitivities. Packaged for gifting. This is more of a decorative piece; for some, it burned clean, for some it didn't. Also, make sure you do the necessary measurements if you already have a spot in mind for such a piece, as I notice some buyers find the candle smaller in person. There are 3 size options (small, medium, large) and 4 color options (moon gray, sandstone, olive beige, white). Lastly these are not two-toned, every candle is unicolored, so to really make these pop like in the picture above, place them somewhere where there is a bit of shade or side by side with other decorative items like a vase.</p>
                <a 
                  href="https://www.amazon.com/LAWA-Swirl-Candle-Beautiful-Housewarming/dp/B0BY3WCJ1K?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=65f7ae7a207235a01f6a6436855cb755&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Thirteenth Product - Heavy Ceramic Table Lamp */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/tablelamp.png"
                    alt="Heavy Ceramic Table Lamp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Heavy Ceramic Table Lamp</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Modern table lamp with a fabric shade, cracked ceramic design detail on base, measuring 53cm tall and 45cm wide—sized right for a living room side table, bedroom nightstand, or study. Comes with a 12W LED bulb and push-button switch for easy use at night or morning. No complicated setup—the lamp arrives pre-assembled: just flip the shade down, set it on the base, screw in the included light bulb, plug it in and you're set. Available in two color combinations. This is a heavy and large accent lamp. From what I see, almost everyone is pleased except for 3-ish people.</p>
                <a 
                  href="https://www.amazon.com/Living-lampshade-Bedroom-Ceramic-Bedside/dp/B09992PYYX?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=86a3496fe7b7dbf9fb909ddbe21043b0&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Fourteenth Product - Accent Chair */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/simplechair.png"
                    alt="Accent Chair"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Accent Chair</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Accent chair with an ivory linen pillow set in a sleek black iron frame. Sized at 26" Width x 42.1" Depth x 36.5" Height. Arrives pre-assembled for easy setup. Pillow cover is removable for cleaning. I notice most buyers are pleasantly impressed by the chairs when they receive them. There is a review of a lady who has had two of these for over 6 years. I'd say this is one of those Amazon gems.</p>
                <a 
                  href="https://www.amazon.com/Safavieh-Collection-Portland-Pillow-Accent/dp/B08C7XV7MS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=3b36a8250ab26e283ecb98094f5ef83d&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Fifteenth Product - Chunky Knit Throw Blanket */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/chunky-knit-blanket.png"
                    alt="Chunky Knit Throw Blanket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Chunky Knit Throw Blanket</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Chunky knit throw blanket, hand-knit with jumbo chenille yarn. Soft and plush. Shedding and pilling resistant. 3 sizes available, 15 color options. Machine washable. Most buyers are pleased, though do consult the reviews as some don't like the cream-white colour, reporting it's inaccurate to the product picture, others love it. Same goes for the knitting; some find it loose, some find it perfectly plush and chunky (depends on how you like to style it, really). Free returns are available for this blanket—you can return the item for any reason, in new and unused condition, for up to 30 days after purchase. Replacements are available as well, for up to 30 days after purchase.</p>
                <a 
                  href="https://www.amazon.com/Adyrescia-Chunky-Blanket-Throw-Chenille/dp/B09BC4YFJM?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=05231935b6ca4cdeb9cd4d29d1db1a83&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
              
              {/* Sixteenth Product - Irregular Flannel-Wrapped Mirror */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white overflow-hidden mb-3">
                  <img 
                    src="/funmirror.png"
                    alt="Irregular Flannel-Wrapped Mirror"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Irregular Flannel-Wrapped Mirror</h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">Irregular full-length mirror with a soft flannel-wrapped wooden frame. Two sizes available: 63" x 24" and 55" x 24", and 7 colour options: Black, Blue, Green, Grey, Ivory White, Milk Tea & Pink. Can either lean against the wall or hang (comes with the necessary hardware for wall mounting—2 anchors, 2 screws and 2 more anchors on the mirror's back intended for vertical hanging). Made with silver-backed glass, this means you're reflection will be clear and not distorted. This also prevents warping and improves the durability of the mirror, especially if you live somewhere humid. This item has quite incredible reviews to look through, and a consistently high rating. There were complaints about the mirror's smell, but honestly, very few (they represent 3.7% of reviews for this mirror).</p>
                <a 
                  href="https://www.amazon.com/Honyee-Flannel-Wrapped-Irregular-Cloakroom/dp/B0BKGCMKJJ?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=cf8509a314881308881c2c972312b6aa&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <img src="/amazon-logo.svg" alt="Amazon" className="w-3 h-3 filter brightness-0 invert" />
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 pb-8">
          <p className="text-xs italic text-gray-500">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </div>
    </div>
  );
}