const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp", { useNewUrlParser: true });
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const idiomSeeds = [
    {
      idiom: "A BIRD IN THE HAND IS WORTH TWO IN THE BUSH",
      meaning: "Having something that is certain is much better than taking a risk for more, because chances are you might lose everything.",
      meaning: " "
    },
    {
      idiom: "A BLESSING IN DISGUISE",
      meaning: "Something good that isn't recognized at first.",
      meaning: " "
    },
    {
      idiom: "A CHIP ON YOUR SHOULDER",
      meaning: "Being upset for something that happened in the past.",
      meaning: " "
    },
    {
      idiom: "A DIME A DOZEN",
      meaning: "Anything that is common and easy to get.",
      meaning: " "
    },
    {
      idiom: "A DOUBTING THOMAS",
      meaning: "A skeptic who needs physical or personal evidence in order to believe something.",
      meaning: " "
    },
    {
      idiom: "A DROP IN THE BUCKET",
      meaning: "A very small part of something big or whole.",
      meaning: " "
    },
    {
      idiom: "A FOOL AND HIS MONEY ARE EASILY PARTED",
      meaning: "It's easy for a foolish person to lose his/her money.",
      meaning: " "
    },
    {
      idiom: "A HOUSE DIVIDED AGAINST ITSELF CANNOT STAND",
      meaning: "Everyone involved must unify and function together or it will not work out.",
      meaning: " "
    },
    {
      idiom: "A LEOPARD CAN'T CHANGE HIS SPOTS",
      meaning: "You cannot change who you are.",
      meaning: " "
    },
    {
      idiom: "A PENNY SAVED IS A PENNY EARNED",
      meaning: "By not spending money, you are saving money (little by little).",
      meaning: " "
    },
    {
      idiom: "A PICTURE PAINTS A THOUSAND WORDS",
      meaning: "A visual presentation is far more descriptive than words.",
      meaning: " "
    },
    {
      idiom: "A SLAP ON THE WRIST",
      meaning: "A very mild punishment.",
      meaning: " "
    },
    {
      idiom: "A TASTE OF YOUR OWN MEDICINE",
      meaning: "When you are mistreated the same way you mistreat others.",
      meaning: " "
    },
    {
      idiom: "A TOSS-UP",
      meaning: "A result that is still unclear and can go either way.",
      meaning: " "
    },
    {
      idiom: "ACTIONS SPEAK LOUDER THAN WORDS",
      meaning: "It's better to actually do something than just talk about it.",
      meaning: " "
    },
    {
      idiom: "ADD FUEL TO THE FIRE",
      meaning: "Whenever something is done to make a bad situation even worse than it is.",
      meaning: " "
    },
    {
      idiom: "AGAINST THE CLOCK",
      meaning: "Rushed and short on time.",
      meaning: " "
    },
    {
      idiom: "ALL GREEK TO ME",
      meaning: "Meaningless and incomprehensible like someone who cannot read, speak, or understand any of the Greek language would be.",
      meaning: " "
    },
    {
      idiom: "ALL IN THE SAME BOAT",
      meaning: "When everyone is facing the same challenges.",
      meaning: " "
    },
    {
      idiom: "AN ARM AND A LEG",
      meaning: "Very expensive. a large amount of money.",
      meaning: " "
    },
    {
      idiom: "AN AXE TO GRIND",
      meaning: "To have a dispute with someone.",
      meaning: " "
    },
    {
      idiom: "APPLE OF MY EYE",
      meaning: "Someone who is cherished above all others.",
      meaning: " "
    },
    {
      idiom: "AS HIGH AS A KITE",
      meaning: "A person is under the influence of drugs causing a high.",
      meaning: " "
    },
    {
      idiom: "AT THE DROP OF A HAT",
      meaning: "Willing to do something immediately.",
      meaning: " "
    },
    {
      idiom: "BACK SEAT DRIVER",
      meaning: "People who criticize from the sidelines, much like someone giving unwanted advice from the back seat of a vehicle to the driver.",
      meaning: " "
    },
    {
      idiom: "BACK TO SQUARE ONE",
      meaning: "Having to start all over again.",
      meaning: " "
    },
    {
      idiom: "BACK TO THE DRAWING BOARD",
      meaning: "When an attempt fails and it's time to start all over.",
      meaning: " "
    },
    {
      idiom: "BARKING UP THE WRONG TREE",
      meaning: "A mistake made in something you are trying to achieve.",
      meaning: " "
    },
    {
      idiom: "BEAT A DEAD HORSE",
      meaning: "To force an issue that has already ended.",
      meaning: " "
    },
    {
      idiom: "BEATING AROUND THE BUSH",
      meaning: "Avoiding the main topic. Not speaking directly about the issue.",
      meaning: " "
    },
    {
      idiom: "BEND OVER BACKWARDS",
      meaning: "Do whatever it takes to help. Willing to do anything.",
      meaning: " "
    },
    {
      idiom: "BETWEEN A ROCK AND A HARD PLACE",
      meaning: "Stuck between two very bad options.",
      meaning: " "
    },
    {
      idiom: "BITE OFF MORE THAN YOU CAN CHEW",
      meaning: "To take on a task that is way too big.",
      meaning: " "
    },
    {
      idiom: "BITE YOUR TONGUE",
      meaning: "To avoid talking.",
      meaning: " "
    },
    {
      idiom: "BLOOD IS THICKER THAN WATER",
      meaning: "The family bond is closer than anything else.",
      meaning: " "
    },
    {
      idiom: "BITE YOUR TONGUE",
      meaning: "To avoid talking.",
      meaning: " "
    },
    {
      idiom: "BLUE MOON",
      meaning: "A rare event or occurrence.",
      meaning: " "
    },
    {
      idiom: "BREAK A LEG",
      meaning: "A superstitious way to say 'good luck' without saying 'good luck', but rather the opposite.",
      meaning: " "
    },
    {
      idiom: "BUY A LEMON",
      meaning: "To purchase a vehicle that constantly gives problems or stops running after you drive it away.",
      meaning: " "
    },
    {
      idiom: "CAN'T CUT THE MUSTARD ",
      meaning: "Someone who isn't adequate enough to compete or participate.",
      meaning: " "
    },
    {
      idiom: "CAST IRON STOMACH",
      meaning: "Someone who has no problems, complications or ill effects with eating anything or drinking anything.",
      meaning: " "
    },
    {
      idiom: "CHARLEY HORSE",
      meaning: "Stiffness in the leg / a leg cramp",
      meaning: " "
    },
    {
      idiom: "CHEW SOMEONE OUT",
      meaning: "Verbally scold someone.",
      meaning: " "
    },
    {
      idiom: "CHIP ON HIS SHOULDER",
      meaning: "Angry today about something that occurred in the past.",
      meaning: " "
    },
    {
      idiom: "CHOW DOWN",
      meaning: "To eat.",
      meaning: " "
    },
    {
      idiom: "CLOSE BUT NO CIGAR",
      meaning: "To be very near and almost accomplish a goal, but fall short",
      meaning: " "
    },
    {
      idiom: "COME HELL OR HIGH WATER",
      meaning: "Any difficult situation or obstacle.",
      meaning: " "
    },
    {
      idiom: "CRACK SOMEONE UP",
      meaning: "To make someone laugh.",
      meaning: " "
    },
    {
      idiom: "CROSS YOUR FINGERS",
      meaning: "To hope that something happens the way you want it to.",
      meaning: " "
    },
    {
      idiom: "CRY OVER SPILT MILK",
      meaning: "When you complain about a loss from the past.",
      meaning: " "
    },
    {
      idiom: "CRY WOLF",
      meaning: "Intentionally raise a false alarm.",
      meaning: " "
    },
    {
      idiom: "CUP OF JOE",
      meaning: "A cup of coffee.",
      meaning: " "
    },
    {
      idiom: "CURIOSITY KILLED THE CAT",
      meaning: "Being Inquisitive can lead you into a dangerous situation.",
      meaning: " "
    },
    {
      idiom: "CUT TO THE CHASE",
      meaning: "Leave out all the unnecessary details and just get to the point.",
      meaning: " "
    },
    {
      idiom: "DARK HORSE",
      meaning: "One who was previously unknown and is now prominent.",
      meaning: " "
    },
    {
      idiom: "DEAD RINGER",
      meaning: "One hundrend percent (100%) identical. a duplicate.",
      meaning: " "
    },
    {
      idiom: "DEVIL'S ADVOCATE",
      meaning: "Someone who takes a position for the sake of argument without believing in that side of the argument. It can also mean one who presents a counter argument for a position they do believe in, to another debater.",
      meaning: " "
    },
    {
      idiom: "DOG DAYS OF SUMMER",
      meaning: "The hottest days of the summer season.",
      meaning: " "
    },
    {
      idiom: "DON'T COUNT YOUR CHICKENS BEFORE THEY HATCH",
      meaning: "Don't rely on it until yore sure of it.",
      meaning: " "
    },
    {
      idiom: "DON'T LOOK A GIFT HORSE IN THE MOUTH",
      meaning: "When someone gives you a gift, don't be ungrateful.",
      meaning: " "
    },
    {
      idiom: "DON'T PUT ALL YOUR EGGS IN ONE BASKET",
      meaning: "Do not put all your resources in one possibility.",
      meaning: " "
    },
    {
      idiom: "DOOZY",
      meaning: "Something outstanding.",
      meaning: " "
    },
    {
      idiom: "DOWN TO THE WIRE",
      meaning: "Something that ends at the last minute or last few seconds.",
      meaning: " "
    },
    {
      idiom: "DRASTIC TIMES CALL FOR DRASTIC MEASURES",
      meaning: "When you are extremely desperate you need to take extremely desperate actions.",
      meaning: " "
    },
    {
      idiom: "DRINK LIKE A FISH",
      meaning: "To drink very heavily.",
      meaning: " "
    },
    {
      idiom: "DRIVE SOMEONE UP THE WALL",
      meaning: "To irritate and/or annoy very much.",
      meaning: " "
    },
    {
      idiom: "DROPPING LIKE FLIES",
      meaning: "A large number of people either falling ill or dying.",
      meaning: " "
    },
    {
      idiom: "DRY RUN",
      meaning: "Rehearsal.",
      meaning: " "
    },
    {
      idiom: "EIGHTY SIX",
      meaning: "A certain item is no longer available. or this idiom can also mean, to throw away.",
      meaning: " "
    },
    {
      idiom: "ELVIS HAS LEFT THE BUILDING",
      meaning: "The show has come to an end. It's all over.",
      meaning: " "
    },
    {
      idiom: "EVERY CLOUD HAS A SILVER LINING",
      meaning: "Be optimistic, even difficult times will lead to better days.",
      meaning: " "
    },
    {
      idiom: "EVERYTHING BUT THE KITCHEN SINK",
      meaning: "Almost everything and anything has been included.",
      meaning: " "
    },
    {
      idiom: "EXCUSE MY FRENCH",
      meaning: "Please forgive me for cussing.",
      meaning: " "
    },
    {
      idiom: "COCK AND BULL STORY",
      meaning: "An unbelievable tale.",
      meaning: " "
    },
    {
      idiom: "FEEDING FRENZY",
      meaning: "An aggressive attack on someone by a group",
      meaning: " "
    },
    {
      idiom: "FIELD DAY",
      meaning: "An enjoyable day or circumstance",
      meaning: " "
    },
    {
      idiom: "FINDING YOUR FEET",
      meaning: "To become more comfortable in whatever you are doing",
      meaning: " "
    },
    {
      idiom: "FINGER LICKIN' GOOD",
      meaning: "A very tasty food or meal",
      meaning: " "
    },
    {
      idiom: "FIXED IN YOUR WAYS",
      meaning: "Not willing or wanting to change from your normal way of doing something",
      meaning: " "
    },
    {
      idiom: "FLASH IN THE PAN",
      meaning: "Something that shows potential or looks promising in the beginning but fails to deliver anything in the end",
      meaning: " "
    },
    {
      idiom: "FLEA MARKET",
      meaning: "A swap meet. a place where people gather to buy and sell inexpensive goods",
      meaning: " "
    },
    {
      idiom: "FLESH AND BLOOD",
      meaning: "This idiom can mean living material of which people are made of, or it can refer to someone's family",
      meaning: " "
    },
    {
      idiom: "FLIP THE BIRD",
      meaning: "To raise your middle finger at someone",
      meaning: " "
    },
    {
      idiom: "FOAM AT THE MOUTH",
      meaning: "To be enraged and show it",
      meaning: " "
    },
    {
      idiom: "FOOLS' GOLD",
      meaning: "Iron pyrites, a worthless rock that resembles real gold",
      meaning: " "
    },
    {
      idiom: "FRENCH KISS",
      meaning: "An open mouth kiss where tongues touch",
      meaning: " "
    },
    {
      idiom: "FROM RAGS TO RICHES",
      meaning: "To go from being very poor to being very wealthy.",
      meaning: " "
    },
    {
      idiom: "FUDDY-DUDDY",
      meaning: "An old-fashioned and foolish type of person",
      meaning: " "
    },
    {
      idiom: "FULL MONTY",
      meaning: "This idiom can mean either, \"the whole thing\" or \"completely nude\".",
      meaning: " "
    },
    {
      idiom: "FUNNY FARM",
      meaning: "A mental institutional facility.",
      meaning: " "
    },
    {
      idiom: "GET DOWN TO BRASS TACKS",
      meaning: "To become serious about something.",
      meaning: " "
    },
    {
      idiom: "GET OVER IT",
      meaning: "To move beyond something that is bothering you.",
      meaning: " "
    },
    {
      idiom: "GET UP ON THE WRONG SIDE OF THE BED",
      meaning: "Someone who is having a horrible day",
      meaning: " "
    },
    {
      idiom: "GET YOUR WALKING PAPERS",
      meaning: "Get fired from a job.",
      meaning: " "
    },
    {
      idiom: "GIVE HIM THE SLIP",
      meaning: "To get away from. to escape",
      meaning: " "
    },
    {
      idiom: "GO DOWN LIKE A LEAD BALLOON",
      meaning: "To be received badly by an audience.",
      meaning: " "
    },
    {
      idiom: "GO FOR BROKE",
      meaning: "To gamble everything you have.",
      meaning: " "
    },
    {
      idiom: "GO OUT ON A LIMB",
      meaning: "Put yourself in a tough position in order to support someone/something.",
      meaning: " "
    },
    {
      idiom: "GO THE EXTRA MILE",
      meaning: "Going above and beyond whatever is required for the task at hand.",
      meaning: " "
    },
    {
      idiom: "GOOD SAMARITAN",
      meaning: "Someone who helps others when they are in need, with no discussion for compensation, and no thought of a reward.",
      meaning: " "
    },
    {
      idiom: "GRAVEYARD SHIFT",
      meaning: "Working hours from about 12 00 am to 8 00 am. the time of the day when most other people are sleeping.",
      meaning: " "
    },
    {
      idiom: "GREAT MINDS THINK ALIKE",
      meaning: "Intelligent people think like each other.",
      meaning: " "
    },
    {
      idiom: "GREEN ROOM",
      meaning: "The waiting room, especially for those who are about to go on a tv or radio show.",
      meaning: " "
    },
    {
      idiom: "GUT FEELING",
      meaning: "A personal intuition you get, especially when feel something may not be right",
      meaning: " "
    },
    {
      idiom: "HASTE MAKES WASTE",
      meaning: "Quickly doing things results in a poor ending",
      meaning: " "
    },
    {
      idiom: "HAT TRICK",
      meaning: "When one player scores three goals in the same hockey game. This idiom can also mean three scores in any other sport, such as 3 homeruns, 3 touchdowns, 3 soccer goals, etc",
      meaning: " "
    },
    {
      idiom: "HAVE AN AXE TO GRIND",
      meaning: "To have a dispute with someone",
      meaning: " "
    },
    {
      idiom: "HE LOST HIS HEAD",
      meaning: "Angry and overcome by emotions",
      meaning: " "
    },
    {
      idiom: "HEAD OVER HEELS",
      meaning: "Very excited and/or joyful, especially when in love",
      meaning: " "
    },
    {
      idiom: "HELL IN A HANDBASKET",
      meaning: "Deteriorating and headed for complete disaster",
      meaning: " "
    },
    {
      idiom: "HIGH FIVE",
      meaning: "Slapping palms above each others heads as celebration gesture",
      meaning: " "
    },
    {
      idiom: "HIGH ON THE HOG",
      meaning: "Living in luxury.",
      meaning: " "
    },
    {
      idiom: "HIT THE BOOKS",
      meaning: "To study, especially for a test or exam",
      meaning: " "
    },
    {
      idiom: "HIT THE HAY",
      meaning: "Go to bed or go to sleep",
      meaning: " "
    },
    {
      idiom: "HIT THE NAIL ON THE HEAD",
      meaning: "Do something exactly right or say something exactly right",
      meaning: " "
    },
    {
      idiom: "HIT THE SACK",
      meaning: "Go to bed or go to sleep.",
      meaning: " "
    },
    {
      idiom: "HOCUS POCUS",
      meaning: "In general, a term used in magic or trickery.",
      meaning: " "
    },
    {
      idiom: "HOLD YOUR HORSES",
      meaning: "Be patient.",
      meaning: " "
    },
    {
      idiom: "ICING ON THE CAKE",
      meaning: "When you already have it good and get something on top of what you already have.",
      meaning: " "
    },
    {
      idiom: "IDLE HANDS ARE THE DEVIL'S TOOLS",
      meaning: "You are more likely to get in trouble if you have nothing to do.",
      meaning: " "
    },
    {
      idiom: "IF IT'S NOT ONE THING, IT'S ANOTHER",
      meaning: "When one thing goes wrong, then another, and another...",
      meaning: " "
    },
    {
      idiom: "IN LIKE FLYNN",
      meaning: "To be easily successful, especially when sexual or romantic.",
      meaning: " "
    },
    {
      idiom: "IN THE BAG",
      meaning: "To have something secured.",
      meaning: " "
    },
    {
      idiom: "IN THE BUFF",
      meaning: "Nude.",
      meaning: " "
    },
    {
      idiom: "IN THE HEAT OF THE MOMENT",
      meaning: "Overwhelmed by what is happening in the moment.",
      meaning: " "
    },
    {
      idiom: "IN YOUR FACE",
      meaning: "An aggressive and bold confrontation.",
      meaning: " "
    },
    {
      idiom: "IT TAKES TWO TO TANGO",
      meaning: "A two person conflict where both people are at fault.",
      meaning: " "
    },
    {
      idiom: "IT'S A SMALL WORLD",
      meaning: "You frequently see the same people in different places.",
      meaning: " "
    },
    {
      idiom: "ITS ANYONE'S CALL",
      meaning: "A competition where the outcome is difficult to judge or predict.",
      meaning: " "
    },
    {
      idiom: "IVY LEAGUE",
      meaning: "Since 1954 the Ivy League has been the following universities  Columbia, Brown, Cornell, Dartmouth, Yale, Pennsylvania, Princeton, and Harvard.",
      meaning: " "
    },
    {
      idiom: "JAYWALK",
      meaning: "Crossing the street (from the middle) without using the crosswalk.",
      meaning: " "
    },
    {
      idiom: "JOSHING ME",
      meaning: "Tricking me.",
      meaning: " "
    },
    {
      idiom: "KEEP AN EYE ON HIM",
      meaning: "You should carefully watch him.",
      meaning: " "
    },
    {
      idiom: "KEEP BODY AND SOUL TOGETHER",
      meaning: "To earn a sufficient amount of money in order to keep yourself alive .",
      meaning: " "
    },
    {
      idiom: "KEEP YOUR CHIN UP",
      meaning: "To remain joyful in a tough situation.",
      meaning: " "
    },
    {
      idiom: "KICK THE BUCKET",
      meaning: "Die.",
      meaning: " "
    },
    {
      idiom: "KITTY-CORNER",
      meaning: "Diagonally across. Sometimes called Catty-Corner as well.",
      meaning: " "
    },
    {
      idiom: "KNEE JERK REACTION",
      meaning: "A quick and automatic response.",
      meaning: " "
    },
    {
      idiom: "KNOCK ON WOOD",
      meaning: "Knuckle tapping on wood in order to avoid some bad luck.",
      meaning: " "
    },
    {
      idiom: "KNOW THE ROPES",
      meaning: "To understand the details.",
      meaning: " "
    },
    {
      idiom: "LAST BUT NOT LEAST",
      meaning: "An introduction phrase to let the audience know that the last person mentioned is no less important than those introduced before him/her.",
      meaning: " "
    },
    {
      idiom: "LEND ME YOUR EAR",
      meaning: "To politely ask for someone's full attention.",
      meaning: " "
    },
    {
      idiom: "LET BYGONES BE BYGONES",
      meaning: "To forget about a disagreement or argument.",
      meaning: " "
    },
    {
      idiom: "LET SLEEPING DOGS LIE",
      meaning: "To avoid restarting a conflict.",
      meaning: " "
    },
    {
      idiom: "LET THE CAT OUT OF THE BAG",
      meaning: "To share a secret that wasn't supposed to be shared.",
      meaning: " "
    },
    {
      idiom: "LEVEL PLAYING FIELD",
      meaning: "A fair competition where no side has an advantage.",
      meaning: " "
    },
    {
      idiom: "LIKE A CHICKEN WITH ITS HEAD CUT OFF",
      meaning: "To act in a frenzied manner.",
      meaning: " "
    },
    {
      idiom: "LIQUOR SOMEONE UP",
      meaning: "To get someone drunk.",
      meaning: " "
    },
    {
      idiom: "LONG IN THE TOOTH",
      meaning: "Old people (or horses).",
      meaning: " "
    },
    {
      idiom: "LOOSE CANNON",
      meaning: "Someone who is unpredictable and can cause damage if not kept in check.",
      meaning: " "
    },
    {
      idiom: "MAKE NO BONES ABOUT",
      meaning: "To state a fact so there are no doubts or objections.",
      meaning: " "
    },
    {
      idiom: "METHOD TO MY MADNESS",
      meaning: "Strange or crazy actions that appear meaningless but in the end are done for a good reason.",
      meaning: " "
    },
    {
      idiom: "MUMBO JUMBO",
      meaning: "Nonsense or meaningless speech.",
      meaning: " "
    },
    {
      idiom: "MUM'S THE WORD",
      meaning: "To keep quiet. to say nothing.",
      meaning: " "
    },
    {
      idiom: "NEST EGG",
      meaning: "Savings set aside for future use.",
      meaning: " "
    },
    {
      idiom: "NEVER BITE THE HAND THAT FEEDS YOU",
      meaning: "Don't hurt anyone that helps you.",
      meaning: " "
    },
    {
      idiom: "NEW KID ON THE BLOCK",
      meaning: "Someone new to the group or area.",
      meaning: " "
    },
    {
      idiom: "NEW YORK MINUTE",
      meaning: "A minute that seems to go by quickly, especially in a fast paced environment.",
      meaning: " "
    },
    {
      idiom: "NO DICE",
      meaning: "To not agree. to not accept a proposition.",
      meaning: " "
    },
    {
      idiom: "NO ROOM TO SWING A CAT",
      meaning: "An unusually small or confined space.",
      meaning: " "
    },
    {
      idiom: "NOT PLAYING WITH A FULL DECK",
      meaning: "Someone who lacks intelligence.",
      meaning: " "
    },
    {
      idiom: "OFF ON THE WRONG FOOT",
      meaning: "Getting a bad start on a relationship or task.",
      meaning: " "
    },
    {
      idiom: "OFF THE HOOK",
      meaning: "No longer have to deal with a tough situation.",
      meaning: " "
    },
    {
      idiom: "OFF THE RECORD",
      meaning: "Something said in confidence that the one speaking doesn't want attributed to him/her.",
      meaning: " "
    },
    {
      idiom: "ON PINS AND NEEDLES",
      meaning: "Anxious or nervous, especially in anticipation of something.",
      meaning: " "
    },
    {
      idiom: "ON THE FENCE",
      meaning: "Undecided.",
      meaning: " "
    },
    {
      idiom: "ON THE SAME PAGE",
      meaning: "When multiple people all agree on the same thing.",
      meaning: " "
    },
    {
      idiom: "OUT OF THE BLUE",
      meaning: "Something that suddenly and unexpectedly occurs.",
      meaning: " "
    },
    {
      idiom: "OUT ON A LIMB",
      meaning: "When someone puts themselves in a risky situation.",
      meaning: " "
    },
    {
      idiom: "OUT ON THE TOWN",
      meaning: "To enjoy yourself by going out.",
      meaning: " "
    },
    {
      idiom: "OVER MY DEAD BODY",
      meaning: "When you absolutely will not allow something to happen.",
      meaning: " "
    },
    {
      idiom: "OVER THE TOP",
      meaning: "Very excessive.",
      meaning: " "
    },
    {
      idiom: "PASS THE BUCK",
      meaning: "Avoid responsibility by giving it to someone else.",
      meaning: " "
    },
    {
      idiom: "PEDAL TO THE METAL",
      meaning: "To go full speed, especially while driving a vehicle.",
      meaning: " "
    },
    {
      idiom: "PEEPING TOM",
      meaning: "Someone who observes people in the nude or sexually active people, mainly for his own gratification.",
      meaning: " "
    },
    {
      idiom: "PICK UP YOUR EARS",
      meaning: "To listen very carefully.",
      meaning: " "
    },
    {
      idiom: "PIG IN A POKE",
      meaning: "A deal that is made without first examining it.",
      meaning: " "
    },
    {
      idiom: "PIG OUT ",
      meaning: "To eat a lot and eat it quickly.",
      meaning: " "
    },
    {
      idiom: "PIPE DOWN",
      meaning: "To shut-up or be quiet.",
      meaning: " "
    },
    {
      idiom: "PRACTICE MAKES PERFECT",
      meaning: "By constantly practicing, you will become better.",
      meaning: " "
    },
    {
      idiom: "PULL THE PLUG",
      meaning: "To stop something. to bring something to an end.",
      meaning: " "
    },
    {
      idiom: "PULLING YOUR LEG",
      meaning: "Tricking someone as a joke.",
      meaning: " "
    },
    {
      idiom: "PUT A SOCK IN IT",
      meaning: "To tell noisy person or a group to be quiet.",
      meaning: " "
    },
    {
      idiom: "RAINCHECK",
      meaning: "An offer or deal that is declined right now but willing to accept later.",
      meaning: " "
    },
    {
      idiom: "RAINING CATS AND DOGS",
      meaning: "A very loud and noisy rain storm.",
      meaning: " "
    },
    {
      idiom: "RING FENCING",
      meaning: "Separated usual judgement to guarantee protection, especially project funds.",
      meaning: " "
    },
    {
      idiom: "RISE AND SHINE",
      meaning: "Time to get out of bed and get ready for work/school.",
      meaning: " "
    },
    {
      idiom: "ROME WAS NOT BUILT IN ONE DAY",
      meaning: "If you want something to be completely properly, then is going to take time.",
      meaning: " "
    },
    {
      idiom: "RULE OF THUMB",
      meaning: "A rough estimate.",
      meaning: " "
    },
    {
      idiom: "RUN OUT OF STEAM",
      meaning: "To be completely out of energy.",
      meaning: " "
    },
    {
      idiom: "SAVED BY THE BELL",
      meaning: "Saved at the last possible moment.",
      meaning: " "
    },
    {
      idiom: "SCAPEGOAT",
      meaning: "Someone else who takes the blame.",
      meaning: " "
    },
    {
      idiom: "SCOT-FREE",
      meaning: "To escape and not have to pay.",
      meaning: " "
    },
    {
      idiom: "SICK AS A DOG",
      meaning: "To be very sick (with the flu or a cold).",
      meaning: " "
    },
    {
      idiom: "SITTING SHOTGUN",
      meaning: "Riding in the front passenger seat of a car.",
      meaning: " "
    },
    {
      idiom: "SIXTH SENSE",
      meaning: "A paranormal sense that allows you to communicate with the dead.",
      meaning: " "
    },
    {
      idiom: "SKID ROW",
      meaning: "The rundown area of a city where the homeless and drug users live.",
      meaning: " "
    },
    {
      idiom: "SMELL A RAT",
      meaning: "To detect someone in the group is betraying the others.",
      meaning: " "
    },
    {
      idiom: "SMELL SOMETHING FISHY",
      meaning: "Detecting that something isn't right and there might be a reason for it.",
      meaning: " "
    },
    {
      idiom: "SON OF A GUN",
      meaning: "A scamp.",
      meaning: " "
    },
    {
      idiom: "SOUTHPAW",
      meaning: "Someone who is left-handed.",
      meaning: " "
    },
    {
      idiom: "SPITTING IMAGE",
      meaning: "The exact likeness or kind.",
      meaning: " "
    },
    {
      idiom: "START FROM SCRATCH",
      meaning: "To do it all over again from the beginning.",
      meaning: " "
    },
    {
      idiom: "THE BALL IS IN YOUR COURT",
      meaning: "It is your decision this time.",
      meaning: " "
    },
    {
      idiom: "THE BEST OF BOTH WORLDS",
      meaning: "There are two choices and you have them both.",
      meaning: " "
    },
    {
      idiom: "THE BIGGER THEY ARE THE HARDER THEY FALL",
      meaning: "While the bigger and stronger opponent might be a lot more difficult to beat, when you do they suffer a much bigger loss.",
      meaning: " "
    },
    {
      idiom: "THE LAST STRAW",
      meaning: "When one small burden after another creates an unbearable situation, the last straw is the last small burden that one can take.",
      meaning: " "
    },
    {
      idiom: "THE WHOLE NINE YARDS",
      meaning: "Everything. All of it.",
      meaning: " "
    },
    {
      idiom: "THIRD TIMES A CHARM",
      meaning: "After no success the first two times, the third try is a lucky one.",
      meaning: " "
    },
    {
      idiom: "TIE THE KNOT",
      meaning: "To get married.",
      meaning: " "
    },
    {
      idiom: "TIL THE COWS COME HOME",
      meaning: "A long time.",
      meaning: " "
    },
    {
      idiom: "TO MAKE A LONG STORY SHORT",
      meaning: "Something someone would say during a long and boring story in order to keep his/her audience from losing attention. Usually the story isn't shortened.",
      meaning: " "
    },
    {
      idiom: "TO STEAL SOMEONE'S THUNDER",
      meaning: "To take the credit for something someone else did.",
      meaning: " "
    },
    {
      idiom: "TONGUE-IN-CHEEK",
      meaning: "Humor, not to be taken serious.",
      meaning: " "
    },
    {
      idiom: "TURN A BLIND EYE",
      meaning: "Refuse to acknowledge something you know is real or legit.",
      meaning: " "
    },
    {
      idiom: "TWENTY THREE SKIDOO",
      meaning: "To be turned away.",
      meaning: " "
    },
    {
      idiom: "UNDER THE WEATHER",
      meaning: "Feeling ill or sick.",
      meaning: " "
    },
    {
      idiom: "UP A BLIND ALLEY",
      meaning: "Going down a course of action that leads to a bad outcome.",
      meaning: " "
    },
    {
      idiom: "USE YOUR LOAF",
      meaning: "Use your head. Think smart.",
      meaning: " "
    },
    {
      idiom: "VAN GOGH'S EAR FOR MUSIC",
      meaning: "Tone deaf.",
      meaning: " "
    },
    {
      idiom: "VARIETY IS THE SPICE OF LIFE",
      meaning: "The more experiences you try the more exciting life can be.",
      meaning: " "
    },
    {
      idiom: "WAG THE DOG",
      meaning: "A diversion away from something of greater importance.",
      meaning: " "
    },
    {
      idiom: "WATER UNDER THE BRIDGE",
      meaning: "Anything from the past that isn't significant or important anymore.",
      meaning: " "
    },
    {
      idiom: "WEAR YOUR HEART ON YOUR SLEEVE",
      meaning: "To openly and freely express your emotions.",
      meaning: " "
    },
    {
      idiom: "WHEN IT RAINS, IT POURS",
      meaning: "Since it rarely rains, when it does it will be a huge storm.",
      meaning: " "
    },
    {
      idiom: "WHEN PIGS FLY ",
      meaning: "Something that will never ever happen.",
      meaning: " "
    },
    {
      idiom: "WILD AND WOOLY",
      meaning: "Uncultured and without laws.",
      meaning: " "
    },
    {
      idiom: "WINE AND DINE",
      meaning: "When somebody is treated to an expensive meal.",
      meaning: " "
    },
    {
      idiom: "WITHOUT A DOUBT",
      meaning: "For certain.",
      meaning: " "
    },
    {
      idiom: "X MARKS THE SPOT",
      meaning: "A phrase that is said when someone finds something he/she has been looking for.",
      meaning: " "
    },
    {
      idiom: "YOU ARE WHAT YOU EAT",
      meaning: "In order to stay healthy you must eat healthy foods.",
      meaning: " "
    },
    {
      idiom: "YOU CAN'T JUDGE A BOOK BY ITS COVER",
      meaning: "Decisions shouldn't be made primarily on appearance.",
      meaning: " "
    },
    {
      idiom: "YOU CAN'T TAKE IT WITH YOU",
      meaning: "Enjoy what you have and not what you don't have, since when you die you cannot take things (such as money) with you.",
      meaning: " "
    },
    {
      idiom: "YOUR GUESS IS AS GOOD AS MINE",
      meaning: "I have no idea.",
      meaning: " "
    },
    {
      idiom: "ZERO TOLERANCE",
      meaning: "No crime or law breaking big or small will be overlooked.",
      meaning: " "
    }
];

db.Idioms
  .remove({})
  .then(() => db.Idioms.collection.insertMany(idiomSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });