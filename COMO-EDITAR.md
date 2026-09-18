# Como trocar imagens e videos

1. Coloque o novo arquivo na mesma pasta do `index.html`.
2. Abra `media-config.js`.
3. Troque apenas o nome do arquivo dentro de `hero`, `proof`, `gallery`, `cars` ou `videos`.
4. Salve e atualize o site no navegador.

Use o nome exato do arquivo, incluindo a extensao. Exemplo:

```js
hero: 'minha-foto.jpg',
videos: [
  'video-entrega.mp4',
  'video-loja.mp4'
]
```

## Onde cada arquivo aparece

- `hero`: foto grande da abertura.
- `proof`: foto da seção sobre a consultora.
- `gallery`: cinco fotos da galeria de entregas.
- `cars`: quatro imagens dos veículos da vitrine, na ordem Kicks, Frontier, Creta e Versa.
- `videos`: vídeos da seção Revemar Seminovos, na ordem em que aparecem.

Não renomeie o `index.html` nem o `media-config.js`.