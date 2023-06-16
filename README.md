# decoder_ring

Message decoder that enables the user to encode or decode secret messages using 3 different cipher algorithms.

<h2>Algorithm 1: Caesar Shift</h2>

The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.


For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.
Screenshot 2023-06-15 at 8.06.49 PM<img width="751" alt="image" src="https://github.com/iammattlewis/decoder_ring/assets/118700125/f58fdb6d-0b05-4a56-8985-09ea444a89e5">


When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

<h2>Algorithm 2 : Polybius Square</h2>

The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.
<img width="1446" alt="image" src="https://github.com/iammattlewis/decoder_ring/assets/118700125/41b7b577-360f-423c-b35d-6ecc3a4a54e0">

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

When decoding the message, each pair of numbers is translated using the coordinates.


<h2>Algorithm 3: Substitution Cipher</h2>


The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.
<img width="702" alt="image" src="https://github.com/iammattlewis/decoder_ring/assets/118700125/84117a24-8956-447d-93e7-10f0d9f8465d">

For example, in the image above, the word HELLO would be translated as follows:

    H becomes R.
    E becomes M.
    L becomes W.
    O becomes L.

This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
