Basically, encryption is the process of scrambling plaintext into unreadable ciphertext, which you can decrypt with a relevant key, while hashing turns plain text into a unique code, which can't be reverted into a readable form

HTTP is stateless: there is no link between two requests being successively carried out on the same connection.

1 -> Hashing : 1 way. converting simple text into some uinique code which cant'be reverted into a readable form.

The hash function will always return the same values for the same string. So whenver you are logged in, than using the hash function we can save the hashed passweod in DB and later if user tries to login we can hash that password and compare it with the hash password present in the DB. If matches we can allow him else not.

2 -> Encryption :  This is a 2 way. Encryption is a two-way function where data is passed in as plaintext and comes out as ciphertext, which is unreadable. Since encryption is two-way, the data can be decrypted so it is readable again using private keys.

3 -> json web tokens : It's neither of encrtpying nor hashing (it's techincally is digital signature). Any one can see the o/p given the signature. signature can be verified only using the password.

4 -> Local storage  :The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)




