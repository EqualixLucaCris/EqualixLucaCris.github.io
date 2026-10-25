# Pubblicare l'MVP su GitHub Pages

## 1. Copia i file

Estrai lo ZIP in una cartella temporanea e copia il contenuto della cartella `EqualixLucaCris.github.io` nel tuo repository locale. Includi anche `.github/` e `.nojekyll`.

Lo ZIP non contiene `.git`: conserva la cartella `.git` già presente nel repository locale. Non inserire una seconda cartella `EqualixLucaCris.github.io` dentro il repository: `index.html` deve essere direttamente alla radice.

## 2. Controlla l'anteprima

Apri `index.html` nel browser. Controlla la foto, le descrizioni dei progetti e i link GitHub; verifica che i contenuti corrispondano a ciò che vuoi rendere pubblico.

## 3. Invia i file a GitHub

Dal terminale, nella cartella del repository:

```bash
git status
git branch --show-current
git add index.html css/style.css img/profile_pic.jpg README.md PUBLISH.md .nojekyll .github/workflows/ci.yml
git diff --cached --stat
git commit -m "Build personal portfolio MVP"
git push origin main
```

Questi comandi presuppongono che tu sia su `main`. Se lavori su un altro branch, fai il push del tuo branch e apri una pull request verso `main`, poi completa il merge secondo le regole del repository. Se il remoto contiene modifiche nuove e Git rifiuta il push, confronta le modifiche: non usare un force push.

## 4. Attiva GitHub Pages

Nel repository GitHub `EqualixLucaCris/EqualixLucaCris.github.io`:

1. Apri **Settings → Pages**.
2. In **Build and deployment → Source**, scegli **Deploy from a branch**.
3. Scegli **main** e **/(root)**.
4. Premi **Save**.
5. Controlla il deployment nella scheda **Actions** e apri il link mostrato in **Settings → Pages**.

Indirizzo atteso: https://equalixlucacris.github.io/

Con GitHub Free usa un repository pubblico. La CI inclusa controlla alcuni file; il workflow Pages creato da GitHub gestisce la pubblicazione. In questa configurazione la pubblicazione non dipende dall'esito della CI personalizzata.

Documentazione ufficiale: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 5. Aggiornamenti

Ogni aggiornamento di `main` viene pubblicato da GitHub Pages. Dopo aver ottenuto una certificazione Azure, aggiungi il badge ufficiale e il link di verifica nella sezione `certifications` di `index.html`.
