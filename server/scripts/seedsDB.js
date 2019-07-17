const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const idioms = [
  {
    "idiom": "A BIRD IN THE HAND IS WORTH TWO IN THE BUSH",
    "meaning": "Having something that is certain is much better than taking a risk for more, because chances are you might lose everything."
  },
  {
    "idiom": "A BLESSING IN DISGUISE",
    "meaning": "Something good that isn't recognized at first."
  },
  {
    "idiom": "A CHIP ON YOUR SHOULDER",
    "meaning": "Being upset for something that happened in the past."
  },
  {
    "idiom": "A DIME A DOZEN",
    "meaning": "Anything that is common and easy to get."
  },
  {
    "idiom": "A DOUBTING THOMAS",
    "meaning": "A skeptic who needs physical or personal evidence in order to believe something."
  },
  {
    "idiom": "A DROP IN THE BUCKET",
    "meaning": "A very small part of something big or whole."
  },
  {
    "idiom": "A FOOL AND HIS MONEY ARE EASILY PARTED",
    "meaning": "It's easy for a foolish person to lose his/her money."
  },
  {
    "idiom": "A HOUSE DIVIDED AGAINST ITSELF CANNOT STAND",
    "meaning": "Everyone involved must unify and function together or it will not work out."
  },
  {
    "idiom": "A LEOPARD CAN'T CHANGE HIS SPOTS",
    "meaning": "You cannot change who you are."
  },
  {
    "idiom": "A PENNY SAVED IS A PENNY EARNED",
    "meaning": "By not spending money, you are saving money (little by little)."
  },
  {
    "idiom": "A PICTURE PAINTS A THOUSAND WORDS",
    "meaning": "A visual presentation is far more descriptive than words."
  },
  {
    "idiom": "A SLAP ON THE WRIST",
    "meaning": "A very mild punishment."
  },
  {
    "idiom": "A TASTE OF YOUR OWN MEDICINE",
    "meaning": "When you are mistreated the same way you mistreat others."
  },
  {
    "idiom": "A TOSS-UP",
    "meaning": "A result that is still unclear and can go either way."
  },
  {
    "idiom": "ACTIONS SPEAK LOUDER THAN WORDS",
    "meaning": "It's better to actually do something than just talk about it."
  },
  {
    "idiom": "ADD FUEL TO THE FIRE",
    "meaning": "Whenever something is done to make a bad situation even worse than it is."
  },
  {
    "idiom": "AGAINST THE CLOCK",
    "meaning": "Rushed and short on time."
  },
  {
    "idiom": "ALL GREEK TO ME",
    "meaning": "Meaningless and incomprehensible like someone who cannot read, speak, or understand any of the Greek language would be."
  },
  {
    "idiom": "ALL IN THE SAME BOAT",
    "meaning": "When everyone is facing the same challenges."
  },
  {
    "idiom": "AN ARM AND A LEG",
    "meaning": "Very expensive. a large amount of money."
  },
  {
    "idiom": "AN AXE TO GRIND",
    "meaning": "To have a dispute with someone."
  },
  {
    "idiom": "APPLE OF MY EYE",
    "meaning": "Someone who is cherished above all others."
  },
  {
    "idiom": "AS HIGH AS A KITE",
    "meaning": "A person is under the influence of drugs causing a high."
  },
  {
    "idiom": "AT THE DROP OF A HAT",
    "meaning": "Willing to do something immediately."
  },
  {
    "idiom": "BACK SEAT DRIVER",
    "meaning": "People who criticize from the sidelines, much like someone giving unwanted advice from the back seat of a vehicle to the driver."
  },
  {
    "idiom": "BACK TO SQUARE ONE",
    "meaning": "Having to start all over again."
  },
  {
    "idiom": "BACK TO THE DRAWING BOARD",
    "meaning": "When an attempt fails and it's time to start all over."
  },
  {
    "idiom": "BARKING UP THE WRONG TREE",
    "meaning": "A mistake made in something you are trying to achieve."
  },
  {
    "idiom": "BEAT A DEAD HORSE",
    "meaning": "To force an issue that has already ended."
  },
  {
    "idiom": "BEATING AROUND THE BUSH",
    "meaning": "Avoiding the main topic. Not speaking directly about the issue."
  },
  {
    "idiom": "BEND OVER BACKWARDS",
    "meaning": "Do whatever it takes to help. Willing to do anything."
  },
  {
    "idiom": "BETWEEN A ROCK AND A HARD PLACE",
    "meaning": "Stuck between two very bad options."
  },
  {
    "idiom": "BITE OFF MORE THAN YOU CAN CHEW",
    "meaning": "To take on a task that is way too big."
  },
  {
    "idiom": "BITE YOUR TONGUE",
    "meaning": "To avoid talking."
  },
  {
    "idiom": "BLOOD IS THICKER THAN WATER",
    "meaning": "The family bond is closer than anything else."
  },
  {
    "idiom": "BITE YOUR TONGUE",
    "meaning": "To avoid talking."
  },
  {
    "idiom": "BLUE MOON",
    "meaning": "A rare event or occurrence."
  },
  {
    "idiom": "BREAK A LEG",
    "meaning": "A superstitious way to say 'good luck' without saying 'good luck', but rather the opposite."
  },
  {
    "idiom": "BUY A LEMON",
    "meaning": "To purchase a vehicle that constantly gives problems or stops running after you drive it away."
  },
  {
    "idiom": "CAN'T CUT THE MUSTARD ",
    "meaning": "Someone who isn't adequate enough to compete or participate."
  },
  {
    "idiom": "CAST IRON STOMACH",
    "meaning": "Someone who has no problems, complications or ill effects with eating anything or drinking anything."
  },
  {
    "idiom": "CHARLEY HORSE",
    "meaning": "Stiffness in the leg / a leg cramp"
  },
  {
    "idiom": "CHEW SOMEONE OUT",
    "meaning": "Verbally scold someone."
  },
  {
    "idiom": "CHIP ON HIS SHOULDER",
    "meaning": "Angry today about something that occurred in the past."
  },
  {
    "idiom": "CHOW DOWN",
    "meaning": "To eat."
  },
  {
    "idiom": "CLOSE BUT NO CIGAR",
    "meaning": "To be very near and almost accomplish a goal, but fall short"
  },
  {
    "idiom": "COME HELL OR HIGH WATER",
    "meaning": "Any difficult situation or obstacle."
  },
  {
    "idiom": "CRACK SOMEONE UP",
    "meaning": "To make someone laugh."
  },
  {
    "idiom": "CROSS YOUR FINGERS",
    "meaning": "To hope that something happens the way you want it to."
  },
  {
    "idiom": "CRY OVER SPILT MILK",
    "meaning": "When you complain about a loss from the past."
  },
  {
    "idiom": "CRY WOLF",
    "meaning": "Intentionally raise a false alarm."
  },
  {
    "idiom": "CUP OF JOE",
    "meaning": "A cup of coffee."
  },
  {
    "idiom": "CURIOSITY KILLED THE CAT",
    "meaning": "Being Inquisitive can lead you into a dangerous situation."
  },
  {
    "idiom": "CUT TO THE CHASE",
    "meaning": "Leave out all the unnecessary details and just get to the point."
  },
  {
    "idiom": "DARK HORSE",
    "meaning": "One who was previously unknown and is now prominent."
  },
  {
    "idiom": "DEAD RINGER",
    "meaning": "One hundrend percent (100%) identical. a duplicate."
  },
  {
    "idiom": "DEVIL'S ADVOCATE",
    "meaning": "Someone who takes a position for the sake of argument without believing in that side of the argument. It can also mean one who presents a counter argument for a position they do believe in, to another debater."
  },
  {
    "idiom": "DOG DAYS OF SUMMER",
    "meaning": "The hottest days of the summer season."
  },
  {
    "idiom": "DON'T COUNT YOUR CHICKENS BEFORE THEY HATCH",
    "meaning": "Don't rely on it until yore sure of it."
  },
  {
    "idiom": "DON'T LOOK A GIFT HORSE IN THE MOUTH",
    "meaning": "When someone gives you a gift, don't be ungrateful."
  },
  {
    "idiom": "DON'T PUT ALL YOUR EGGS IN ONE BASKET",
    "meaning": "Do not put all your resources in one possibility."
  },
  {
    "idiom": "DOOZY",
    "meaning": "Something outstanding."
  },
  {
    "idiom": "DOWN TO THE WIRE",
    "meaning": "Something that ends at the last minute or last few seconds."
  },
  {
    "idiom": "DRASTIC TIMES CALL FOR DRASTIC MEASURES",
    "meaning": "When you are extremely desperate you need to take extremely desperate actions."
  },
  {
    "idiom": "DRINK LIKE A FISH",
    "meaning": "To drink very heavily."
  },
  {
    "idiom": "DRIVE SOMEONE UP THE WALL",
    "meaning": "To irritate and/or annoy very much."
  },
  {
    "idiom": "DROPPING LIKE FLIES",
    "meaning": "A large number of people either falling ill or dying."
  },
  {
    "idiom": "DRY RUN",
    "meaning": "Rehearsal."
  },
  {
    "idiom": "EIGHTY SIX",
    "meaning": "A certain item is no longer available. or this idiom can also mean, to throw away."
  },
  {
    "idiom": "ELVIS HAS LEFT THE BUILDING",
    "meaning": "The show has come to an end. It's all over."
  },
  {
    "idiom": "EVERY CLOUD HAS A SILVER LINING",
    "meaning": "Be optimistic, even difficult times will lead to better days."
  },
  {
    "idiom": "EVERYTHING BUT THE KITCHEN SINK",
    "meaning": "Almost everything and anything has been included."
  },
  {
    "idiom": "EXCUSE MY FRENCH",
    "meaning": "Please forgive me for cussing."
  },
  {
    "idiom": "COCK AND BULL STORY",
    "meaning": "An unbelievable tale."
  },
  {
    "idiom": "FEEDING FRENZY",
    "meaning": "An aggressive attack on someone by a group"
  },
  {
    "idiom": "FIELD DAY",
    "meaning": "An enjoyable day or circumstance"
  },
  {
    "idiom": "FINDING YOUR FEET",
    "meaning": "To become more comfortable in whatever you are doing"
  },
  {
    "idiom": "FINGER LICKIN' GOOD",
    "meaning": "A very tasty food or meal"
  },
  {
    "idiom": "FIXED IN YOUR WAYS",
    "meaning": "Not willing or wanting to change from your normal way of doing something"
  },
  {
    "idiom": "FLASH IN THE PAN",
    "meaning": "Something that shows potential or looks promising in the beginning but fails to deliver anything in the end"
  },
  {
    "idiom": "FLEA MARKET",
    "meaning": "A swap meet. a place where people gather to buy and sell inexpensive goods"
  },
  {
    "idiom": "FLESH AND BLOOD",
    "meaning": "This idiom can mean living material of which people are made of, or it can refer to someone's family"
  },
  {
    "idiom": "FLIP THE BIRD",
    "meaning": "To raise your middle finger at someone"
  },
  {
    "idiom": "FOAM AT THE MOUTH",
    "meaning": "To be enraged and show it"
  },
  {
    "idiom": "FOOLS' GOLD",
    "meaning": "Iron pyrites, a worthless rock that resembles real gold"
  },
  {
    "idiom": "FRENCH KISS",
    "meaning": "An open mouth kiss where tongues touch"
  },
  {
    "idiom": "FROM RAGS TO RICHES",
    "meaning": "To go from being very poor to being very wealthy."
  },
  {
    "idiom": "FUDDY-DUDDY",
    "meaning": "An old-fashioned and foolish type of person"
  },
  {
    "idiom": "FULL MONTY",
    "meaning": "This idiom can mean either, \"the whole thing\" or \"completely nude\"."
  },
  {
    "idiom": "FUNNY FARM",
    "meaning": "A mental institutional facility."
  },
  {
    "idiom": "GET DOWN TO BRASS TACKS",
    "meaning": "To become serious about something."
  },
  {
    "idiom": "GET OVER IT",
    "meaning": "To move beyond something that is bothering you."
  },
  {
    "idiom": "GET UP ON THE WRONG SIDE OF THE BED",
    "meaning": "Someone who is having a horrible day"
  },
  {
    "idiom": "GET YOUR WALKING PAPERS",
    "meaning": "Get fired from a job."
  },
  {
    "idiom": "GIVE HIM THE SLIP",
    "meaning": "To get away from. to escape"
  },
  {
    "idiom": "GO DOWN LIKE A LEAD BALLOON",
    "meaning": "To be received badly by an audience."
  },
  {
    "idiom": "GO FOR BROKE",
    "meaning": "To gamble everything you have."
  },
  {
    "idiom": "GO OUT ON A LIMB",
    "meaning": "Put yourself in a tough position in order to support someone/something."
  },
  {
    "idiom": "GO THE EXTRA MILE",
    "meaning": "Going above and beyond whatever is required for the task at hand."
  },
  {
    "idiom": "GOOD SAMARITAN",
    "meaning": "Someone who helps others when they are in need, with no discussion for compensation, and no thought of a reward."
  },
  {
    "idiom": "GRAVEYARD SHIFT",
    "meaning": "Working hours from about 12 00 am to 8 00 am. the time of the day when most other people are sleeping."
  },
  {
    "idiom": "GREAT MINDS THINK ALIKE",
    "meaning": "Intelligent people think like each other."
  },
  {
    "idiom": "GREEN ROOM",
    "meaning": "The waiting room, especially for those who are about to go on a tv or radio show."
  },
  {
    "idiom": "GUT FEELING",
    "meaning": "A personal intuition you get, especially when feel something may not be right"
  },
  {
    "idiom": "HASTE MAKES WASTE",
    "meaning": "Quickly doing things results in a poor ending"
  },
  {
    "idiom": "HAT TRICK",
    "meaning": "When one player scores three goals in the same hockey game. This idiom can also mean three scores in any other sport, such as 3 homeruns, 3 touchdowns, 3 soccer goals, etc"
  },
  {
    "idiom": "HAVE AN AXE TO GRIND",
    "meaning": "To have a dispute with someone"
  },
  {
    "idiom": "HE LOST HIS HEAD",
    "meaning": "Angry and overcome by emotions"
  },
  {
    "idiom": "HEAD OVER HEELS",
    "meaning": "Very excited and/or joyful, especially when in love"
  },
  {
    "idiom": "HELL IN A HANDBASKET",
    "meaning": "Deteriorating and headed for complete disaster"
  },
  {
    "idiom": "HIGH FIVE",
    "meaning": "Slapping palms above each others heads as celebration gesture"
  },
  {
    "idiom": "HIGH ON THE HOG",
    "meaning": "Living in luxury."
  },
  {
    "idiom": "HIT THE BOOKS",
    "meaning": "To study, especially for a test or exam"
  },
  {
    "idiom": "HIT THE HAY",
    "meaning": "Go to bed or go to sleep"
  },
  {
    "idiom": "HIT THE NAIL ON THE HEAD",
    "meaning": "Do something exactly right or say something exactly right"
  },
  {
    "idiom": "HIT THE SACK",
    "meaning": "Go to bed or go to sleep."
  },
  {
    "idiom": "HOCUS POCUS",
    "meaning": "In general, a term used in magic or trickery."
  },
  {
    "idiom": "HOLD YOUR HORSES",
    "meaning": "Be patient."
  },
  {
    "idiom": "ICING ON THE CAKE",
    "meaning": "When you already have it good and get something on top of what you already have."
  },
  {
    "idiom": "IDLE HANDS ARE THE DEVIL'S TOOLS",
    "meaning": "You are more likely to get in trouble if you have nothing to do."
  },
  {
    "idiom": "IF IT'S NOT ONE THING, IT'S ANOTHER",
    "meaning": "When one thing goes wrong, then another, and another..."
  },
  {
    "idiom": "IN LIKE FLYNN",
    "meaning": "To be easily successful, especially when sexual or romantic."
  },
  {
    "idiom": "IN THE BAG",
    "meaning": "To have something secured."
  },
  {
    "idiom": "IN THE BUFF",
    "meaning": "Nude."
  },
  {
    "idiom": "IN THE HEAT OF THE MOMENT",
    "meaning": "Overwhelmed by what is happening in the moment."
  },
  {
    "idiom": "IN YOUR FACE",
    "meaning": "An aggressive and bold confrontation."
  },
  {
    "idiom": "IT TAKES TWO TO TANGO",
    "meaning": "A two person conflict where both people are at fault."
  },
  {
    "idiom": "IT'S A SMALL WORLD",
    "meaning": "You frequently see the same people in different places."
  },
  {
    "idiom": "ITS ANYONE'S CALL",
    "meaning": "A competition where the outcome is difficult to judge or predict."
  },
  {
    "idiom": "IVY LEAGUE",
    "meaning": "Since 1954 the Ivy League has been the following universities  Columbia, Brown, Cornell, Dartmouth, Yale, Pennsylvania, Princeton, and Harvard."
  },
  {
    "idiom": "JAYWALK",
    "meaning": "Crossing the street (from the middle) without using the crosswalk."
  },
  {
    "idiom": "JOSHING ME",
    "meaning": "Tricking me."
  },
  {
    "idiom": "KEEP AN EYE ON HIM",
    "meaning": "You should carefully watch him."
  },
  {
    "idiom": "KEEP BODY AND SOUL TOGETHER",
    "meaning": "To earn a sufficient amount of money in order to keep yourself alive ."
  },
  {
    "idiom": "KEEP YOUR CHIN UP",
    "meaning": "To remain joyful in a tough situation."
  },
  {
    "idiom": "KICK THE BUCKET",
    "meaning": "Die."
  },
  {
    "idiom": "KITTY-CORNER",
    "meaning": "Diagonally across. Sometimes called Catty-Corner as well."
  },
  {
    "idiom": "KNEE JERK REACTION",
    "meaning": "A quick and automatic response."
  },
  {
    "idiom": "KNOCK ON WOOD",
    "meaning": "Knuckle tapping on wood in order to avoid some bad luck."
  },
  {
    "idiom": "KNOW THE ROPES",
    "meaning": "To understand the details."
  },
  {
    "idiom": "LAST BUT NOT LEAST",
    "meaning": "An introduction phrase to let the audience know that the last person mentioned is no less important than those introduced before him/her."
  },
  {
    "idiom": "LEND ME YOUR EAR",
    "meaning": "To politely ask for someone's full attention."
  },
  {
    "idiom": "LET BYGONES BE BYGONES",
    "meaning": "To forget about a disagreement or argument."
  },
  {
    "idiom": "LET SLEEPING DOGS LIE",
    "meaning": "To avoid restarting a conflict."
  },
  {
    "idiom": "LET THE CAT OUT OF THE BAG",
    "meaning": "To share a secret that wasn't supposed to be shared."
  },
  {
    "idiom": "LEVEL PLAYING FIELD",
    "meaning": "A fair competition where no side has an advantage."
  },
  {
    "idiom": "LIKE A CHICKEN WITH ITS HEAD CUT OFF",
    "meaning": "To act in a frenzied manner."
  },
  {
    "idiom": "LIQUOR SOMEONE UP",
    "meaning": "To get someone drunk."
  },
  {
    "idiom": "LONG IN THE TOOTH",
    "meaning": "Old people (or horses)."
  },
  {
    "idiom": "LOOSE CANNON",
    "meaning": "Someone who is unpredictable and can cause damage if not kept in check."
  },
  {
    "idiom": "MAKE NO BONES ABOUT",
    "meaning": "To state a fact so there are no doubts or objections."
  },
  {
    "idiom": "METHOD TO MY MADNESS",
    "meaning": "Strange or crazy actions that appear meaningless but in the end are done for a good reason."
  },
  {
    "idiom": "MUMBO JUMBO",
    "meaning": "Nonsense or meaningless speech."
  },
  {
    "idiom": "MUM'S THE WORD",
    "meaning": "To keep quiet. to say nothing."
  },
  {
    "idiom": "NEST EGG",
    "meaning": "Savings set aside for future use."
  },
  {
    "idiom": "NEVER BITE THE HAND THAT FEEDS YOU",
    "meaning": "Don't hurt anyone that helps you."
  },
  {
    "idiom": "NEW KID ON THE BLOCK",
    "meaning": "Someone new to the group or area."
  },
  {
    "idiom": "NEW YORK MINUTE",
    "meaning": "A minute that seems to go by quickly, especially in a fast paced environment."
  },
  {
    "idiom": "NO DICE",
    "meaning": "To not agree. to not accept a proposition."
  },
  {
    "idiom": "NO ROOM TO SWING A CAT",
    "meaning": "An unusually small or confined space."
  },
  {
    "idiom": "NOT PLAYING WITH A FULL DECK",
    "meaning": "Someone who lacks intelligence."
  },
  {
    "idiom": "OFF ON THE WRONG FOOT",
    "meaning": "Getting a bad start on a relationship or task."
  },
  {
    "idiom": "OFF THE HOOK",
    "meaning": "No longer have to deal with a tough situation."
  },
  {
    "idiom": "OFF THE RECORD",
    "meaning": "Something said in confidence that the one speaking doesn't want attributed to him/her."
  },
  {
    "idiom": "ON PINS AND NEEDLES",
    "meaning": "Anxious or nervous, especially in anticipation of something."
  },
  {
    "idiom": "ON THE FENCE",
    "meaning": "Undecided."
  },
  {
    "idiom": "ON THE SAME PAGE",
    "meaning": "When multiple people all agree on the same thing."
  },
  {
    "idiom": "OUT OF THE BLUE",
    "meaning": "Something that suddenly and unexpectedly occurs."
  },
  {
    "idiom": "OUT ON A LIMB",
    "meaning": "When someone puts themselves in a risky situation."
  },
  {
    "idiom": "OUT ON THE TOWN",
    "meaning": "To enjoy yourself by going out."
  },
  {
    "idiom": "OVER MY DEAD BODY",
    "meaning": "When you absolutely will not allow something to happen."
  },
  {
    "idiom": "OVER THE TOP",
    "meaning": "Very excessive."
  },
  {
    "idiom": "PASS THE BUCK",
    "meaning": "Avoid responsibility by giving it to someone else."
  },
  {
    "idiom": "PEDAL TO THE METAL",
    "meaning": "To go full speed, especially while driving a vehicle."
  },
  {
    "idiom": "PEEPING TOM",
    "meaning": "Someone who observes people in the nude or sexually active people, mainly for his own gratification."
  },
  {
    "idiom": "PICK UP YOUR EARS",
    "meaning": "To listen very carefully."
  },
  {
    "idiom": "PIG IN A POKE",
    "meaning": "A deal that is made without first examining it."
  },
  {
    "idiom": "PIG OUT ",
    "meaning": "To eat a lot and eat it quickly."
  },
  {
    "idiom": "PIPE DOWN",
    "meaning": "To shut-up or be quiet."
  },
  {
    "idiom": "PRACTICE MAKES PERFECT",
    "meaning": "By constantly practicing, you will become better."
  },
  {
    "idiom": "PULL THE PLUG",
    "meaning": "To stop something. to bring something to an end."
  },
  {
    "idiom": "PULLING YOUR LEG",
    "meaning": "Tricking someone as a joke."
  },
  {
    "idiom": "PUT A SOCK IN IT",
    "meaning": "To tell noisy person or a group to be quiet."
  },
  {
    "idiom": "RAINCHECK",
    "meaning": "An offer or deal that is declined right now but willing to accept later."
  },
  {
    "idiom": "RAINING CATS AND DOGS",
    "meaning": "A very loud and noisy rain storm."
  },
  {
    "idiom": "RING FENCING",
    "meaning": "Separated usual judgement to guarantee protection, especially project funds."
  },
  {
    "idiom": "RISE AND SHINE",
    "meaning": "Time to get out of bed and get ready for work/school."
  },
  {
    "idiom": "ROME WAS NOT BUILT IN ONE DAY",
    "meaning": "If you want something to be completely properly, then is going to take time."
  },
  {
    "idiom": "RULE OF THUMB",
    "meaning": "A rough estimate."
  },
  {
    "idiom": "RUN OUT OF STEAM",
    "meaning": "To be completely out of energy."
  },
  {
    "idiom": "SAVED BY THE BELL",
    "meaning": "Saved at the last possible moment."
  },
  {
    "idiom": "SCAPEGOAT",
    "meaning": "Someone else who takes the blame."
  },
  {
    "idiom": "SCOT-FREE",
    "meaning": "To escape and not have to pay."
  },
  {
    "idiom": "SICK AS A DOG",
    "meaning": "To be very sick (with the flu or a cold)."
  },
  {
    "idiom": "SITTING SHOTGUN",
    "meaning": "Riding in the front passenger seat of a car."
  },
  {
    "idiom": "SIXTH SENSE",
    "meaning": "A paranormal sense that allows you to communicate with the dead."
  },
  {
    "idiom": "SKID ROW",
    "meaning": "The rundown area of a city where the homeless and drug users live."
  },
  {
    "idiom": "SMELL A RAT",
    "meaning": "To detect someone in the group is betraying the others."
  },
  {
    "idiom": "SMELL SOMETHING FISHY",
    "meaning": "Detecting that something isn't right and there might be a reason for it."
  },
  {
    "idiom": "SON OF A GUN",
    "meaning": "A scamp."
  },
  {
    "idiom": "SOUTHPAW",
    "meaning": "Someone who is left-handed."
  },
  {
    "idiom": "SPITTING IMAGE",
    "meaning": "The exact likeness or kind."
  },
  {
    "idiom": "START FROM SCRATCH",
    "meaning": "To do it all over again from the beginning."
  },
  {
    "idiom": "THE BALL IS IN YOUR COURT",
    "meaning": "It is your decision this time."
  },
  {
    "idiom": "THE BEST OF BOTH WORLDS",
    "meaning": "There are two choices and you have them both."
  },
  {
    "idiom": "THE BIGGER THEY ARE THE HARDER THEY FALL",
    "meaning": "While the bigger and stronger opponent might be a lot more difficult to beat, when you do they suffer a much bigger loss."
  },
  {
    "idiom": "THE LAST STRAW",
    "meaning": "When one small burden after another creates an unbearable situation, the last straw is the last small burden that one can take."
  },
  {
    "idiom": "THE WHOLE NINE YARDS",
    "meaning": "Everything. All of it."
  },
  {
    "idiom": "THIRD TIMES A CHARM",
    "meaning": "After no success the first two times, the third try is a lucky one."
  },
  {
    "idiom": "TIE THE KNOT",
    "meaning": "To get married."
  },
  {
    "idiom": "TIL THE COWS COME HOME",
    "meaning": "A long time."
  },
  {
    "idiom": "TO MAKE A LONG STORY SHORT",
    "meaning": "Something someone would say during a long and boring story in order to keep his/her audience from losing attention. Usually the story isn't shortened."
  },
  {
    "idiom": "TO STEAL SOMEONE'S THUNDER",
    "meaning": "To take the credit for something someone else did."
  },
  {
    "idiom": "TONGUE-IN-CHEEK",
    "meaning": "Humor, not to be taken serious."
  },
  {
    "idiom": "TURN A BLIND EYE",
    "meaning": "Refuse to acknowledge something you know is real or legit."
  },
  {
    "idiom": "TWENTY THREE SKIDOO",
    "meaning": "To be turned away."
  },
  {
    "idiom": "UNDER THE WEATHER",
    "meaning": "Feeling ill or sick."
  },
  {
    "idiom": "UP A BLIND ALLEY",
    "meaning": "Going down a course of action that leads to a bad outcome."
  },
  {
    "idiom": "USE YOUR LOAF",
    "meaning": "Use your head. Think smart."
  },
  {
    "idiom": "VAN GOGH'S EAR FOR MUSIC",
    "meaning": "Tone deaf."
  },
  {
    "idiom": "VARIETY IS THE SPICE OF LIFE",
    "meaning": "The more experiences you try the more exciting life can be."
  },
  {
    "idiom": "WAG THE DOG",
    "meaning": "A diversion away from something of greater importance."
  },
  {
    "idiom": "WATER UNDER THE BRIDGE",
    "meaning": "Anything from the past that isn't significant or important anymore."
  },
  {
    "idiom": "WEAR YOUR HEART ON YOUR SLEEVE",
    "meaning": "To openly and freely express your emotions."
  },
  {
    "idiom": "WHEN IT RAINS, IT POURS",
    "meaning": "Since it rarely rains, when it does it will be a huge storm."
  },
  {
    "idiom": "WHEN PIGS FLY ",
    "meaning": "Something that will never ever happen."
  },
  {
    "idiom": "WILD AND WOOLY",
    "meaning": "Uncultured and without laws."
  },
  {
    "idiom": "WINE AND DINE",
    "meaning": "When somebody is treated to an expensive meal."
  },
  {
    "idiom": "WITHOUT A DOUBT",
    "meaning": "For certain."
  },
  {
    "idiom": "X MARKS THE SPOT",
    "meaning": "A phrase that is said when someone finds something he/she has been looking for."
  },
  {
    "idiom": "YOU ARE WHAT YOU EAT",
    "meaning": "In order to stay healthy you must eat healthy foods."
  },
  {
    "idiom": "YOU CAN'T JUDGE A BOOK BY ITS COVER",
    "meaning": "Decisions shouldn't be made primarily on appearance."
  },
  {
    "idiom": "YOU CAN'T TAKE IT WITH YOU",
    "meaning": "Enjoy what you have and not what you don't have, since when you die you cannot take things (such as money) with you."
  },
  {
    "idiom": "YOUR GUESS IS AS GOOD AS MINE",
    "meaning": "I have no idea."
  },
  {
    "idiom": "ZERO TOLERANCE",
    "meaning": "No crime or law breaking big or small will be overlooked."
  }
];

db.idioms
  .remove({})
  .then(() => db.idioms.collection.insertMany(idioms))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
