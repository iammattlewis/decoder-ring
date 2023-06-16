# decoder_ring

Message decoder that enables the user to encode or decode secret messages using 3 different cipher algorithms.

**Algorithm 1: Caesar Shift**
The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

**Algorithm 2 : Polybius Square**
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.

When decoding the message, each pair of numbers is translated using the coordinates.


**Algorithm 3: Substitution Cipher**
The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

