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
  
  const [generatedText, setGeneratedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fetchRandomText = async () => {
    try{
      //https://gpt-from-scratch.vercel.app/api/
      //http://localhost:3000/api/
      const response = await fetch('https://gpt-from-scratch.vercel.app/api/',{
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

  const typeText = async () => {
    setGeneratedText('')
    setIsTyping(true);
    const text = await fetchRandomText();
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
