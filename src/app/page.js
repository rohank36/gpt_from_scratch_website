'use client'
import { useState } from 'react';

export default function Home() {

  const hyperlink = "text-blue-500 underline"
  const hyperparameters = "batch_size = 64, block_size = 256, emb_dim = 384, n_head = 6, vocab_size = 65, max_iters = 5000, lr = 3e-4, n_layers = 6, dropout = 0.2"
  const scaledHP = "batch_size = 64, block_size = 128, emb_dim = 256, n_head = 6, vocab_size = 65, max_iters = 3500, lr = 1e-3, n_layers = 3, dropout = 0.2"
  const crossEntropy = "step 0: train loss 4.2207, val loss 4.2290, step 500: train loss 1.7598, val loss 1.9107, step 1000: train loss 1.3932, val loss 1.6045, step 1500: train loss 1.2673, val loss 1.5316, step 2000: train loss 1.1891, val loss 1.5067, step 2500: train loss 1.1234, val loss 1.4970, step 3000: train loss 1.0729, val loss 1.4882, step 3500: train loss 1.0211, val loss 1.5063, step 4000: train loss 0.9637, val loss 1.5162, step 4500: train loss 0.9105, val loss 1.5468, step 4999: train loss 0.8597, val loss 1.5753"
  const incoherentBlobs ="fhIqUz-DAHpNVvN!IebiqGZSEvD-3Zw?Bjx$KYk-wPmD3vRlbd dO IK R$KasbQge3EEYpC! 'scf:AliEba$iol$CIG? GKtFwkLMvO!vmO?&D?;M$zBP.S3dGdAI.&co"
  const coherentBlobs = "MARCINIUS: Did he we will defy it. CORIOLANUS: My lord; which payte you do to live it? Reason That makest my leavel this officed of each arguie"
  const ela = "ELA: Break! At bed, by him! who see work! What sering you proving of it; the hose, tife of it cames"

  const generate = `
  ISABELLA:
  At thin, you will. Shall you be of this?

  DUKE VINCENTIO:
  The sun whom the foe mistake me before:
  I'l prove you for Tranio;
  And say, some brettimes leave to the face.

  LUCIO:
  Where is my voice, if this banish
  from the while lof you for would be agoing,
  rervenge it, and think it live,
  To repose it what is rue.

  ISABELLA:
  One that means forcing too? Come, go with the king.
  Go, gentleworm, England Camillo;
  What say'st thou there? And Jupiter's night? I do call the
  poison of horries!

  POMPEY:
  The life and region me; and 'twas not in Coriolanus.

  GREGORY:
  Come, strike at the cushing shall the world of the lase.

  SAMPSON:
  Truly, it must at the aptent way.

  SAMPSON:
  Get the sacred statue dry wherewat 'tis destruck.

  GREMIO:
  What makes senseless his friends and pearl,
  Whilst leads like?

  GREGORY:
  The clock-heads  have weeds to have that suck
  The body of Bapthamas earful and him:
  But what hearing wilt make her wars aside,
  Some white of yond sturfeign do me now,
  Their other wey of hen

  'Twas tyrants and virtue: and is Tybalt debel
  When they are as cursed will swear as come.

  PETRUCHIO:
  Then is women and house before Gloucester.

  RIVERS:
  He wonders, sir, why, ha!

  GREMIO:
  What merrily me were not here?

  GREMIO:
  For I have not ten this.

  TYBALT:
  I hope he, I hope should be the other, that in't:
  'Tis not to his must be a straint as not to truth.

  PARISET:
  What news? news, madam, but not so other.

  BALTHASAM:
  Come, sirrah; we cannot sup the
  standly houses; but come of your honour. Led Angelo have tongues.

  DUKE VINCENTIO:

  Provost:
  A wise more it than to be,

  ANGELO:
  I kneel the duke:
  Ay, if 'twell your brother and therefore.'

  ELBOW:
  Marry I thank the drumnight water, and most bed;
  hat laste that I throw by him from Warwick,
  That its yielded.

  Provost:
  Against and commanded kings' valourity; for their
  ful days is the crown: I'll believe no child.

  Servant:
  Forgive good doubt, sir; and then for wild care;
  and God not where you do beg, as you
  Lord Angelo as is to enjoy her. Whence speeds here,
  But by the good town before your take:--
  What then, mine own?
  Thou? lady, ben; I hope thy sonsocing by!
  More than the world and cheek!

  DUKE OF AUMERLE:
  Help my sir, and am I a murre.

  DUKE VINCENTIO:
  By where and Lewis talk, sir, this we shall be
  Enbow me to the lord.

  KING RICHARD II:
  What must he kiss his box remour?

  DUKE VINCENT:
  Though it canst be? to Friar Lodown and maids
  Thy best due this cast Bayndine.
  Prodigio, to the rash threaten patience,
  Vitinous of its poison, or else it good,
  For Crown being at my debt mother'd.
  Thou after of govern back for a wid,
  As this consent may be sopp,
  Came to the second that the anguish mapp'd
  Yied in a mockery fool?

  And sound how our reward may,
  Could prevent with a voice of sleep, with my sons,
  And biting with that strong death may have retirm'd
  Swear doth all the county ancils.

  GREmier:
  And where with the virtue of my corse,
  Your highnes favours should further many blood.

  GREMIO:
  Lie, this is the point.

  PETER:
  Praison Edward, I see, hear she let me herself.

  CATESBY:
  Bring it, I make a corse, and thus here;
  And, as if the streams and something in
  her eyes with the sushing to be married
  us: there is not learn or less truly
  The rest babures of a coolour: false off,
  It shall be not bigger; but one in of you;
  Where else we the spected view our worse,
  and many the stitles of me
  The unwise of your levy-straughtering like,
  The wind of Cominius' work and to ride,
  Be crown'd wear and half once but a maid of one
  Can take or break; content with me it falls?
  They dinstructed many work of oaths than
  Which my tongue against unto their wrongs on war;
  And most prosperous that told them. Thus. O, tell me,
  The climate's instruction.

  DIUS:
  We shall. Let you go bear
  Please with you, and the tribunes of Pompey,
  The precedent cample Marcius with the beads.

  COMINIUS:
  Is't not so?

  MARCIUS:
  Let help the sun, whosest of sad dignifial
  Will not bitter of the old gisses, from the gate,
  For every than which he is it, leaves to make an
  Apardon's queen: it is thought true trust;
  And we have watch'd a moath's voices sure
  To give the subject hath the often beautie.
  Farewell, as he truly,
  As e'er within faithful lars Richard to hide;
  Things shall have find that he had laids upon Tyrrel
  Abouring the father attempt: may will not so unter
  More than thou base with hell's? Come, you have long but
  In action: babes for all together 'not
  If it like it a band, and merrici with
  To tongue o'erwith yosing. Your good toges with more,
  And you to speak to the city for than
  Mine report to take a little bowls.

  SICINIUS:
  Think you' the city you have, swain?

  'Twike your faces, and confesses that what way,
  You utrad me, and writ that said 'F.'

  BRUTUS:
  Their ginor delected laws.

  COMINIUS:
  Though they'll do't ask, we'll cry what is gone
  To take on their banish carries: thou
  Come upon this life to run-bright from a head,
  Or Rome thrust not the suit; wo shall it will cog,
  To crave it from their bru readies when taught
  They intend folly of their close in their own breath.
  How now, what means Each of this? Stay was I not blunt?
  It must, thou say'st, let me not stay a sea
  Where for a sleergyman cross,
  And a grreature and weedst mederates to-day.

  EDWARD:
  Ay, for mine embassade, nor we, I have live,
  I will peace your topt again with you;
  No, for till be near mplant against that we learn.

  PRINCE EDWARD:
  I Duke of Gloucester, might at your minds,
  That only cravels to entravice his scorn,
  For how he doth king brews fear to when Quind.

  QUEEN MARGARET:
  He is your king is his head: what afford gaver,
  You true blushing his head to Clarence' comment.

  CLARENE:
  Then, I'll swear the commodat Clarence; and thus we:
  range but comprisons the trumpets; smiles for mans
  Which have acceptanced with down ignobly.

  Second Lauren:
  Prince Margaret, in a gastern as theger,
  The tiger of Richmond smooth laugh and her and prince,
  And at that state that we and eagle's strength;
  Edward eyes enforce my heart to my forward:
  For brother Margaret, we revenge not o hope.

  WARWICK:
  That yonder may may betwilk, as 'twas born to terms,
  Op that hath made more angry than a king.

  WARWICK:
  BasRindful we not our complexions,
  Thy tongue-frights are witness, and destrayed
  To die fiery wrong, Arp's Margaret axeter,
  And make am nothing of our brith,
  Made before the cries of blood on his fathers,
  May in a sundeeply slavity have loathse;
  For they have an oath too live on him.

  KING RICHARD III:
  My mother, my tLrd of Norfolk, but he stands
  With a pointed king of their frant's lands.

  NORTHUMBERLAND:
  King Lord of Scotland, with a king, till my royal heets:
  But an arms are the Clarence, good night:
  Now break far what night with hell aid,
  And beg in wish the causer of us which shall she come
  Till to see intentents an oppostrod's tongue.
  In those dear that with heir face--he hath
  He will spli live to takewith one out my slaufterest
  And needs i' the servity. Lay the best gone,
  And by the sweet rebels, and safe a plagues
  That stant this. Which, I fear, my hand
  Stungeth most mountainty, at 'twixt my hearts,
  Will not perdon a tinterer than she seem,
  With mildly wild, about a bare of bonnes,
  Command made a man robbbery; there
  my moan, much ways, a man successes my oath:
  I hear effess it, and, and not Martius;
  'Tis come to let the field proceed; dares foundly. Come,
  God home, go with me with you, and with all
  To mine own hath to act my life and care
  With Bohemica? Alone, my lord; pright a puissessly,
  I take my warlike ye well: death my brother
  Being our truth: 'Richme him before thy debt
  A price of beause,--

  SICINIUS:
  Not spirit in taint--as faces
  Which 'twere is a brave balf of the daughter?
  Of this make a beggary year that with
  Yet now use to his him with his brave.

  MENENIUS:
  O Marcius coming news! how cheer
  Than what poison's tomb, butcherish! Shall we put you
  Both you, that thold it,--as I be so offended
  Look the-piper-lock?

  VOLUMNIA:
  A giddly trouble them between ere
  When both itself: so thal bSitan's boot our repeedine
  With the sans.

  MENENIUS:
  Then like what I compass.
  Prosper! Come, gentlemen: let him be unproof.
  What I believe it, or father refring
  You that petty him, I think, for the favice
  The tongue of you? 'tis a husband.

  FRIAR LAURENCE:
  Is the feast e'er for the night.

  BRAHAM:
  I am a Roman till.
  If Warwick never but for his son bids,
  I'll learn the highway tongue; if he chave lose
  To make this boy thus push tire.

  DUKE VINCENTIO:
  Away! then, thou art twainted will rent me
  With some palmers, with nippath the wings,
  The haste wards if peace, when that's tears show'd.
  Your beadsman, disperseth avouched this welcome?
  They gave with dispense and prophecy as ease
  The bech in dearth, boply in a thousand lords;
  As they distinced his lessentering body casters,
  Call their bushels, and that make in hands
  I' the case of hope to be rack'd rough!
  Sweet Clifford! much boister their cleapers
  As may undertake his blood from his report;
  And mank most wild, like a depy white shows and scorn,
  Not shall pluck the body with regards of the kings;
  For of when the oath would read on his chair,
  And whiles they seal themselves to comprolour it our
  Meaning to keep with the king, this king's crown to the world,
  Canrise him evouch the tables of my son,
  Made him own from myself?

  First Murder:
  You being on; but, he, my wife, friends, whom,
  How sorten grows son as another's discoursed,
  Ship his poison's esteeming thrald,
  The heir loads of his sweet hungry prud wrong,
  Bidding him more than the king.

  Third Messenger:
  He did, you can respect at his suble flour;
  But tithe truth reign his competed love
  Like heighes on a soldier gambow,
  In Sun a droude blood, and all,
  The down diggeners of all a dead;
  Dubbled my women will, poor lose, that makes
  The pleasure no more entertainment to
  Keep should spect repent. Camillo,
  At Warwick tell me her prisoner there,
  And term myself his princely to my tall.
  O, but a foolish too miscager,
  Who, in that my best think poor?
  What say as anointer?

  LADY CAPULET:
  All Seests are so too.

  Nurse:
  O, thou shalt in my trusty here:
  Adversed joy my sweetinestly;
  And let me lie. Go, think o'er no less.

  CAPULET:
  London more than hath evere news;
  We are hurt in banished of me.

  Nurse:
  I will not, sir, but carcely suck amended.

  LADY CAPULET:
  Womenio made the stars of this woe.
  Send SCAPULET:
  At white may not anon, I am never.
  If, to quickly out me and honour,
  Which I have found bear of other welcomes,
  My misery descent decrees, about dust ye know
  A from fear death. To make him, a good
  Is clear despite, justified, and known solop,
  Too be virtuous, and slightly hurt by, stopp'd me on
  To impress composite.

  SLY:
  Do't sleep me that; I crush them in our king.

  SLY:
  They lascian before I pray both cannot bring
  more than that our abuse.

  Shepherd:
  Why, boy, I'ld present me to thy life.

  POLIXENES:
  O, be it like an eye attiratempt and love awar!

  Second Servant:
  You have been save a goodly business, yet your
  should not first prove evilently and the friends
  that vantag`
  
  const [generatedText, setGeneratedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  /*
  const fetchRandomText = async () => {
    try{
      //https://gpt-from-scratch.vercel.app/api/
      //http://localhost:3000/api/
      const response = await fetch('http://localhost:3000/api/',{
        method:'GET',
      });
      if(!response.ok){
        return "error"
      }
      const data = await response.json();
      return data.chunk;

    }catch(e){
      throw e;
    }
  };
  */

  const typeText = async () => {
    setGeneratedText('')
    setIsTyping(true);
    const start = Math.floor(Math.random() * (generate.length - 800));
    const text = generate.substring(start, start + 800);
    //const text = await fetchRandomText();
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setGeneratedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
        setTimeout(typeNextChar, 5); // Adjust typing speed here
      } else {
        setIsTyping(false);
      }
    };

    typeNextChar();
  };
  
  
  return (
    <div className="flex h-screen">

      <div className="w-3/5 overflow-y-auto flex flex-col items-center pt-8">
        <div className="text-center">
          <h1 className="text-lg">Mini Shakespeare - GPT From Scratch</h1>
          <h3>Made with ❤️ by <a href="https://www.linkedin.com/in/rohankanti/" className={hyperlink}>Rohan</a></h3>
          <div className="text-left p-2 space-y-5">
            <p>I implemented the <a href="https://arxiv.org/abs/1706.03762" className={hyperlink}>Transformer Decoder</a> architecture from scratch with Python + Pytorch and trained a 10m parameter model on ~40,000 lines of <a href="https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt" className={hyperlink}>Shakespeare</a>. My code is <a href="https://github.com/rohank36/gpt-from-scratch" className={hyperlink}>here</a>.</p>
            <p>I did this to gain a better understanding of the Transformer model which is at the heart of many popular LLMs.</p>
            <p>It was challenging to learn so I leveraged various modes of knowledge input: coding inspired by <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" className={hyperlink}>Andrej Karpathy</a>, reading from <a href="https://deepgram.com/learn/visualizing-and-explaining-transformer-models-from-the-ground-up" className={hyperlink}>Andy Wang</a>, videos from <a href="https://www.youtube.com/watch?v=wjZofJX0v4M" className={hyperlink}>3Blue1Brown</a>, and questions answered by <a href="https://www.perplexity.ai/" className={hyperlink}>Perplexity</a>.</p>
            <p>This project clarified various concepts I struggled with such as: how the shape of the tensors changes throughout the forward pass and what that means, the attention matrix/pattern, how context is built through self-attention, and how the outputs of single heads work together to form a refined vector representation of the token. Coding it helped to spell all this and much more out for me. I definitely should've paid more attention in Linear Algebra😅</p>
            <p>I trained the model with Tokenizer (1 char = 1 token), Optimizer = AdamW, and these <span className="lg:tooltip underline" data-tip={hyperparameters}>hyperparameters</span> on a single GPU resulting in the these <span className="lg:tooltip underline" data-tip={crossEntropy}>Cross-Entropy Losses</span> with the model overfitting a bit after the 3000th step.</p>
            <p>Running the model with those hyperparameters took ~5hrs so here are the <span className="lg:tooltip underline" data-tip={scaledHP}>scaled down hyperparameters</span> I used to play around with a 2m parameter model yielding <a href="https://github.com/rohank36/gpt-from-scratch/blob/main/2m_out.txt" className={hyperlink}>these results</a>. At each evaluation step t, I also generated some text using the models weights at t. You can see how the model learns over time. For example, at each t, the model learns more about Shakespeare's structure as it learns to name speakers followed by some text.</p>
            <p>It's really cool to see the model going from producing <span className="lg:tooltip underline" data-tip={incoherentBlobs}>incoherent blobs of text</span> to <span className="lg:tooltip underline" data-tip={coherentBlobs}>slighty coherent blobs of text</span> in just a few iterations.</p>
            <p>On another crazy cool note, during one training iteration, I was showing my sister the model output and one of the speakers names that it came up with was her name: <span className="lg:tooltip underline" data-tip={ela}>ELA!!</span>. She thought I was playing a joke on her, but I was genuinely shocked! Throughout the whole input text theres no mention of "Ela" as a word. Only one mention of ela as a subword: "d<span className="underline">ela</span>nt". Perhaps it was from ISABELLA when ISABELLA wasn't properly learned yet🤔</p>
            <p>Note that the text generated on the right from the 10m model may appear alright at a glance but it's actually incoherent when you read it. To solve this I would probably need to scale up the hyperparameters and train for longer.</p>
            <p>I'm currently very interested in Deep Learning and its numerous applications. If you want to chat please connect with me via my <a href="https://www.linkedin.com/in/rohankanti/" className={hyperlink}>LinkedIn</a> or rohankanti2527@gmail.com</p>
          </div>
        </div>
      </div>


      <div className="w-2/5 overflow-y-auto flex flex-col items-center pt-8">
        <div className="text-center">
          <button className="btn" onClick={typeText} disabled={isTyping}>Generate</button>
            <div className="p-2 text-left mt-4 whitespace-pre-wrap">{generatedText}</div>
        </div>
      </div>

    </div>
  );
}
