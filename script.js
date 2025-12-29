const questions = [
  "What part of yourself do you think people misunderstand the most?",
  "When you feel overwhelmed, what helps you feel grounded again?",
  "What does feeling safe with someone actually look like for you?",
  "Is there a side of you that you rarely show but wish someone would notice?",
  "What kind of silence feels comfortable to you?",
  "What makes you feel most secure in a relationship, even without words?",
  "When you start to worry about losing someone, what thoughts usually come first?",
  "How do you usually cope with fear? Do you talk, withdraw, or overthink quietly?",
  "What reassurance feels genuine to you, and what kind feels overwhelming?",
  "What do you need from someone when you’re emotionally tired?",
  "When something hurts you, what’s the easiest way for you to talk about it?",
  "What makes you feel heard in a conversation?",
  "Are there things you need time to process before talking about them?",
  "How do you usually show care without realizing it yourself?",
  "What kind of emotional support feels too much for you?",
  "What does emotional closeness mean to you?",
  "What makes a connection feel real, not just intense?",
  "How do you know when someone truly matters to you?",
  "What kind of relationship dynamic makes you feel at ease?",
  "What helps you trust someone over time?",
  "When do you feel most like yourself?",
  "What kind of presence feels comforting to you?",
  "Is there something about you that you’re still learning to accept?",
  "What makes you feel appreciated in small ways?",
  "What do you hope people understand about your heart?",
  "If you could be a cat for one day, what would you spend most of your time doing?",
  "If clouds had feelings, what mood do you think they’re in most of the time?",
  "If your laughter had a sound effect, what would it be?",
  "If your shadow could talk, what kind of personality would it have?",
  "If you could step into an imaginary world, what would it look and feel like?",
  "What kind of place makes you feel quietly happy without needing to explain why?",
  "If you could keep one moment forever, what kind of moment would it be?",
  "Do you think the night or the morning understands you better?",
  "If your heart had a favorite season, which one would it be?",
  "What small thing instantly makes your day better?",
  "When you’re tired, what kind of comfort feels best to you?",
  "What kind of silence do you like?",
  "What’s something simple you never get bored of?",
  "How do you usually show care without realizing you’re doing it?",
  "If you could rename the color of the sky, what would you call it?",
  "If your thoughts were a place, would it be noisy or quiet?",
  "What kind of stories do you naturally pay attention to?",
  "If happiness were a sound, would it be loud or soft?",
  "If you could be any animal for a day, what would you be and why?",
  "If you woke up as a child again for one day, what’s the first thing you’d do?",
  "What do you think plants feel when it rains?",
  "If your mood today were a weather, what would it be?",
  "If your thoughts had a color right now, what color would they be?",
  "If you could talk to your reflection, what would it say back?",
  "If food could talk, which dish would be the nicest to you?",
  "If you had a personal theme song, what kind of vibe would it have?",
  "If your laughter were a place, where would it be?",
  "If you could live inside a painting or a movie scene, which one?",
  "What do you think dreams are really trying to do?",
  "If the moon could answer one question, what would you ask?",
  "If time paused for an hour just for you, how would you spend it?",
  "If you were a small object on a desk, what would you be?",
  "When do you feel most like yourself?",
  "What kind of comfort works best for you when you’re overwhelmed?",
  "What emotion do you feel but rarely talk about?",
  "What helps you feel understood without words?",
  "What kind of presence do you find calming?",
  "What do you usually need more of when you’re tired?",
  "What’s something you wish people noticed about you?",
  "How do you know when you trust someone?",
  "What helps you come back to yourself after a hard day?",
  "What does emotional closeness mean to you?",
  "What small habit brings you comfort?",
  "What kind of day feels like a good day to you?",
  "What do you do when you need to recharge?",
  "What’s something you enjoy more than most people expect?",
  "Are you more of a listener or a talker?",
  "What kind of routine makes you feel grounded?",
  "What usually makes you laugh without trying?",
  "What’s a simple pleasure you never get bored of?",
  "How do you usually show care for others?",
  "What kind of compliment stays with you?",
  "What do you value most in daily life?",
  "What kind of environment helps you focus?",
  "What makes you feel quietly proud of yourself?",
  "What do you think makes a connection feel real?",
  "How do you usually know when something matters to you?",
  "What do you think love is made of?",
  "What helps you stay hopeful?",
  "What kind of questions do you enjoy being asked?",
  "What does being seen feel like to you?",
  "What kind of bond feels meaningful to you?",
  "What do you believe people need more of?",
  "What makes life feel softer to you?",
  "What do you hope never changes about you?",
  "What kind of connection do you want to keep nurturing?",
  "If you suddenly turned into a potato, what do you think your personality would be like?",
  "If your socks had feelings, would they think you’re a good owner?",
  "If you had to name a new flavor of water, what would it be?",
  "If you were a background character in a movie, what would people remember you for?",
  "What snack do you suddenly crave at night?",
  "Do you prefer warm drinks or cold drinks?",
  "What’s a smell that instantly makes you feel good?",
  "If you could nap anywhere right now, where would it be?",
  "Are you more of a blanket person or a pillow person?"
];


const cards = [
  "https://i.postimg.cc/Zn6Thm4g/card01-png.png",
  "https://i.postimg.cc/W1YcCz03/card02-png.png",
  "https://i.postimg.cc/pVKxr2tP/card03-png.png",
  "https://i.postimg.cc/v85MTQwr/card04-png.png",
  "https://i.postimg.cc/yxCHjGcm/card05-png.png",
  "https://i.postimg.cc/bvM8DrvB/card06-png.png",
  "https://i.postimg.cc/65NWf8hX/card07-png.png",
  "https://i.postimg.cc/x8L0SQ9V/card08-png.png",
  "https://i.postimg.cc/W11P5gqV/card09-png.png",
  "https://i.postimg.cc/Df1F02KK/card10-png.png",
  "https://i.postimg.cc/QCgryqqX/card11-png.png",
  "https://i.postimg.cc/3Rvhgh4j/card12-png.png",
  "https://i.postimg.cc/9fSVR0Mm/card13-png.png",
  "https://i.postimg.cc/zDhDhCK9/card14-png.png",
  "https://i.postimg.cc/0QT83jRd/card15-png.png",
  "https://i.postimg.cc/rwwLfx03/card16-png.png",
  "https://i.postimg.cc/ry5cs82b/card17-png.png",
  "https://i.postimg.cc/L5kMbV3r/card18-png.png",
  "https://i.postimg.cc/MHJS5LVj/card19-png.png",
  "https://i.postimg.cc/3x83zzVQ/card20-png.png",
  "https://i.postimg.cc/9X9X9dZJ/card21-png.png",
  "https://i.postimg.cc/RFkM8h5T/card22-png.png",
  "https://i.postimg.cc/zX5NR9Jy/card23-png.png",
  "https://i.postimg.cc/7PSDhxrB/card24-png.png",
  "https://i.postimg.cc/nrfJ2WBg/card25-png.png",
  "https://i.postimg.cc/zBgNnNb1/card26-png.png",
  "https://i.postimg.cc/R0q4ZKvW/card27-png.png",
  "https://i.postimg.cc/qq2kdrpB/card28-png.png",
  "https://i.postimg.cc/y6R6Rmcj/card29-png.png",
  "https://i.postimg.cc/5N1JFZxJ/card30-png.png",
  "https://i.postimg.cc/T2nG1RvQ/card31-png.png",
  "https://i.postimg.cc/FzbQBxVP/card32-png.png",
  "https://i.postimg.cc/4d9GzG7x/card33-png.png",
  "https://i.postimg.cc/jdrx4DhV/card34-png.png",
  "https://i.postimg.cc/ZRGTgntx/card35-png.png",
  "https://i.postimg.cc/wvLK1kZy/card36-png.png",
  "https://i.postimg.cc/yYBKSwV4/card37-png.png",
  "https://i.postimg.cc/3r27NKQF/card38-png.png",
  "https://i.postimg.cc/cCGShzfq/card39-png.png",
  "https://i.postimg.cc/d0Xvk31V/card40-png.png",
  "https://i.postimg.cc/VLcfWJW3/card41-png.png",
  "https://i.postimg.cc/4ypJTGsP/card42-png.png",
  "https://i.postimg.cc/7ZtrdhSL/card43-png.png",
  "https://i.postimg.cc/sf5yxVRs/card44-png.png",
  "https://i.postimg.cc/T1jX4cc1/card45-png.png",
  "https://i.postimg.cc/gjbWs78v/card46-png.png",
  "https://i.postimg.cc/pd7xhrdk/card47-png.png",
  "https://i.postimg.cc/kXdJv2vh/card48-png.png",
  "https://i.postimg.cc/3rGrGXmD/card49-png.png",
  "https://i.postimg.cc/Z55hwpBX/card50-png.png",
  "https://i.postimg.cc/NGRYFgwq/card51-png.png",
  "https://i.postimg.cc/Vv9cVFWx/card52-png.png",
  "https://i.postimg.cc/FRLvjvdk/card53-png.png",
  "https://i.postimg.cc/FK1NH3hG/card54-png.png",
  "https://i.postimg.cc/Vststqnp/card55-png.png",
  "https://i.postimg.cc/Xq9V0Wn4/card56-png.png",
  "https://i.postimg.cc/Z55hwpBc/card57-png.png",
  "https://i.postimg.cc/MZ1xHWJL/card58-png.png",
  "https://i.postimg.cc/wM5dGkkp/card59-png.png",
  "https://i.postimg.cc/mDH4Q4zH/card60-png.png",
  "https://i.postimg.cc/kgT7CfPm/card61-png.png",
  "https://i.postimg.cc/Dzzy4RPz/card62-png.png",
  "https://i.postimg.cc/3N2KHhYS/card63-png.png",
  "https://i.postimg.cc/MKxwjhWZ/card64-png.png",
  "https://i.postimg.cc/pVKxr2Mq/card65-png.png",
  "https://i.postimg.cc/yxCHjGcr/card66-png.png",
  "https://i.postimg.cc/V6Cwjwrq/card67-png.png",
  "https://i.postimg.cc/m2GLyPSB/card68-png.png",
  "https://i.postimg.cc/MH1W8wqd/card69-png.png",
  "https://i.postimg.cc/Y0Qpw7MD/card70-png.png",
  "https://i.postimg.cc/VL1wb3Yc/card71-png.png",
  "https://i.postimg.cc/fWYZywQK/card72-png.png",
  "https://i.postimg.cc/90HhbkZk/card73-png.png",
  "https://i.postimg.cc/50CJwJYW/card74-png.png",
  "https://i.postimg.cc/Yqwrzvx2/card75-png.png",
  "https://i.postimg.cc/nzyH5rbk/card76-png.png",
  "https://i.postimg.cc/RZpxyhwJ/card77-png.png",
  "https://i.postimg.cc/HsHm7fpG/card78-png.png",
  "https://i.postimg.cc/NGRYFgv8/card79-png.png",
  "https://i.postimg.cc/RhxBdYKX/card80-png.png",
  "https://i.postimg.cc/8C3DJc5D/card81-png.png",
  "https://i.postimg.cc/1z4s3wyH/card82-png.png",
  "https://i.postimg.cc/VvXYcwmx/card83-png.png",
  "https://i.postimg.cc/mgpWJk7Z/card84-png.png",
  "https://i.postimg.cc/3r27NKHT/card85-png.png",
  "https://i.postimg.cc/0jGqBCC5/card86-png.png",
  "https://i.postimg.cc/ZnzSHQp6/card87-png.png",
  "https://i.postimg.cc/pd7xhrTH/card88-png.png",
  "https://i.postimg.cc/HWMWMwbD/card89-png.png",
  "https://i.postimg.cc/05S5SYDp/card90-png.png",
  "https://i.postimg.cc/8zzVZMfg/card91-png.png",
  "https://i.postimg.cc/jqyK2srV/card92-png.png",
  "https://i.postimg.cc/Hn0Chttd/card93-png.png",
  "https://i.postimg.cc/856GhGJC/card94-png.png",
  "https://i.postimg.cc/XvX4Ydny/card95-png.png",
  "https://i.postimg.cc/XN5N5fdH/card96-png.png",
  "https://i.postimg.cc/XN5N5fdf/card97-png.png",
  "https://i.postimg.cc/65wKGD9y/card98-png.png",
  "https://i.postimg.cc/CMbY5Fpr/card99-png.png",
  "https://i.postimg.cc/3NjHcZFq/card100-png.png"
                    
];


document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const menu = document.getElementById("menu");
  const menuCard = document.getElementById("menuCard");
  const menuQuestion = document.getElementById("menuQuestion");
  const dailyCard = document.getElementById("dailyCard");
  const whisperBox = document.getElementById("whisperBox");
  const backToMenuCard = document.getElementById("backToMenuCard");
  const backToMenuWhisper = document.getElementById("backToMenuWhisper");

  const cardImage = document.getElementById("cardImage");
  const drawBtn = document.getElementById("drawBtn");
  const resetBtn = document.getElementById("resetBtn");
  const note = document.getElementById("note");
  const hint = document.getElementById("hint");

  enterBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.style.display = "none";
      menu.style.display = "flex";
    }, 600);
  });

  menuCard.addEventListener("click", () => {
    menu.style.display = "none";
    dailyCard.style.display = "flex";
    resetDailyCard();
  });

  backToMenuCard.addEventListener("click", () => {
    dailyCard.style.display = "none";
    menu.style.display = "flex";
  });

  menuQuestion.addEventListener("click", () => {
    menu.style.display = "none";
    whisperBox.style.display = "flex";
  });

  backToMenuWhisper.addEventListener("click", () => {
    whisperBox.style.display = "none";
    menu.style.display = "flex";
  });

  function resetDailyCard() {
    cardImage.style.display = "none";
    note.textContent = "Your card for today.";
    note.style.display = "block";
    hint.textContent = "";
    hint.style.display = "none";
    drawBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    document.body.classList.remove("night");
  }

  drawBtn.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * cards.length);
    cardImage.src = cards[idx];
    cardImage.style.display = "block";
    note.textContent = "You've Received Today's Card";
    hint.textContent = "Come back tomorrow for a new card.";
    drawBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    if(idx >= 75) document.body.classList.add("night");
  });

  resetBtn.addEventListener("click", resetDailyCard);

  resetDailyCard();
});
