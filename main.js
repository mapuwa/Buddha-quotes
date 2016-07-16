var quotes = [
    "All that we are is the result of what we have thought. If a man speaks or acts with an evil thought, pain follows him. If a man speaks or acts with a pure thought, happiness follows him, like a shadow that never leaves him.",
    "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    "Let yourself be open and life will be easier. A spoon of salt in a glass of water makes the water undrinkable. A spoon of salt in a lake is almost unnoticed.",
    "All that we are is the result of what we have thought.",
    "Everything changes, nothing remains without change.",
    "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    "Neither fire nor wind, birth nor death can erase our good deeds.",
    "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    "Believe nothing merely because you have been told it. Do not believe what your teacher tells you merely out of respect for the teacher. But whatsoever, after due examination and analysis, you find to be kind, conducive to the good, the benefit, the welfare of all beings -- that doctrine believe and cling to, and take it as your guide.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "A family is a place where minds come in contact with one another. If these minds love one another the home will be as beautiful as a flower garden. But if these minds get out of harmony with one another it is like a storm that plays havoc with the garden.",
    "An insincere and evil friend is more to be feared than a wild beast - a wild beast may wound your body, but an evil friend will wound your mind.",
    "Even death is not to be feared by one who has lived wisely.",
    "If you knew what I know about the power of giving, you would not let a single meal pass without sharing it in some way.",
    "On a long journey of human life, faith is the best of companions it is the best refreshment on the journey and it is the greatest property.",
    "Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense.",
    "Peace comes from within. Do not seek it without.",
    "The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.",
    "Better than a thousand hollow words, is one word that brings peace.",
    "Endurance is one of the most difficult disciplines, but it is to the one who endures that the final victory comes.",
    "We are shaped by our thoughts. We become what we think.",
    "You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. you yourself, as much as anybody in the entire universe deserve your love and affection.",
    "It is a man's own mind, not his enemy or foe, that lures him to evil ways.",
    "Anger will never disappear so long as thoughts of resentment are cherished in the mind. Anger will disappear just as soon as thoughts of resentment are forgotten.",
    "As the flectcher whittles and makes straight his arrows, so the master directs his straying thoughts.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Everything is changeable, everything appears and disappears there is no blissful peace until one passes beyond the agony of life and death.",
    "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    "He is able who thinks he is able.",
    "He who loves 50 people has 50 woes, he who loves no one has no woes.",
    "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else you are the one who gets burned.",
    "If a man's mind becomes pure, his surroundings will also become pure.",
    "It is better to conquer yourself than to win a thousand battles. Then the victory is yours. It cannot be taken from you, not by angels or by demons, heaven or hell.",
    "Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind. To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue.",
    "Let a man avoid evil deeds as a man who loves life avoids poison.",
    "Of all the worldly passions, lust is the most intense. All other worldly passions seem to follow in its train.",
    "On life's journey faith is nourishment, virtuous deeds are a shelter, wisdom is the light by day and right mindfulness is the protection by night. If a man lives a pure life, nothing can destroy him.",
    "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
    "The secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles but to live in the present moment wisely and earnestly.",
    "The tongue like a sharp knife... Kills without drawing blood.",
    "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
    "Therefore, be ye lamps unto yourselves, be a refuge to yourselves. Hold fast to Truth as a lamp; hold fast to the truth as a refuge. Look not for a refuge in anyone beside yourselves. And those, who shall be a lamp unto themselves, shall betake themselves to no external refuge, but holding fast to the Truth as their lamp, and holding fast to the Truth as their refuge, they shall reach the topmost height.",
    "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    "Times of luxury do not last long, but pass away very quickly nothing in this world can be long enjoyed.",
    "To be idle is a short road to death and to be diligent is a way of life foolish people are idle, wise people are diligent.",
    "To be idle is a short road to death and to be diligent is a way of life; foolish people are idle, wise people are diligent.",
    "To keep the body in good health is a duty otherwise we shall not be able to keep our mind strong and clear.",
    "To keep the body in good health is a duty. . . otherwise we shall not be able to keep our mind strong and clear.",
    "To live a pure unselfish life, one must count nothing as one's own in the midst of abundance.",
    "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    "Work out your own salvation. Do not depend on others.",
    "You should respect each other and refrain from disputes you should not, like water and oil, repel each other, but should, like milk and water, mingle together.",
    "You will not be punished for your anger, you will be punished by your anger",
    "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    "You only lose what you cling to.",
    "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise.",
    "Whatever a monk keeps pursuing with his thinking and pondering, that becomes the inclination of his awareness.",
    "Walk as if you are kissing the Earth with your feet.",
];

function getRandomQuote() {
    return quotes[Math.round(Math.random()*(quotes.length - 1))]
};

function showNextQuote () {
    document.getElementById("quote").classList.add("preanimation");
    setTimeout(function(){
        document.getElementById("quote").innerHTML = getRandomQuote();
        document.getElementById("quote").classList.remove("preanimation");
    },1100)
}
document.getElementById("quote").innerHTML = getRandomQuote();

document.getElementById("next-button").addEventListener("click", showNextQuote);

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    switch(code) {
        case 39: //left arrow
        case 78: // n key
        case 32: // spacebar
        case 13: // enter
            showNextQuote();
    }
};