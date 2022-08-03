The easiest way to have React-Bootstrap & Bootstrap forms working with Netlify.

You must have <form> </form> inside the <body> </body>

  <form name='contact' netlify hidden>
    <input type='text' name='name' />
    <input type='email' name='email' />
    <textarea name='message'></textarea>
  </form>

Make sure that you match up your forms with the codes in the index.html.
