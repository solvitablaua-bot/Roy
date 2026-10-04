const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const errs = [];
  const vp = process.argv[2] === 'phone' ? {width:400,height:780} : {width:1180,height:820};
  const p = await b.newPage({ viewport: vp });
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('file:///home/user/Roy/Roy/game/index.html');
  await p.addStyleTag({content: '.badge{display:none!important}'});
  await p.evaluate(() => { document.getElementById('view-sea').hidden = true; document.getElementById('view-park').hidden = false; });
  await p.click('#gate'); await p.waitForTimeout(1300);
  const results = [];
  for (const idx of [0,1,2,3,4,5,7,8,9,10,12]) {
    await p.click('#place-book', {force:true}).catch(()=>{});
    await p.evaluate(() => { document.getElementById('view-park').hidden = true; });
    await p.evaluate(() => { document.getElementById('found').hidden = true; document.getElementById('view-mission').hidden = true; document.getElementById('view-book').hidden = false; });
    // open book fresh via button in found or menu
    await p.evaluate(() => document.getElementById('again-btn').click());
    await p.waitForTimeout(200);
    for (let k = 0; k < 14 && !(await p.$('[data-go="'+idx+'"]')); k++) { await p.click('#turn-next'); await p.waitForTimeout(60); }
    await p.evaluate(i => document.querySelector('[data-go="'+i+'"]').click(), idx);
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `m${idx}-a.png` });
    const found = () => p.evaluate(() => !document.getElementById('found').hidden);
    for (let guard = 0; guard < 40 && !(await found()); guard++) {
      const prints = await p.$$('.print.next');
      if (prints.length) { await prints[0].evaluate(e => e.click()); await p.waitForTimeout(250); continue; }
      const stone = await p.$('.stone.next');
      if (stone) { await stone.evaluate(e => e.click()); await p.waitForTimeout(500); if (!(await p.$('.stone.next'))) await p.waitForTimeout(1800); continue; }
      const leg = await p.$('.giant-leg');
      if (leg) { await leg.evaluate(e => e.click()); await p.waitForTimeout(1200); continue; }
      const peek = await p.$('.critter.peekup');
      if (peek) { const sp = await peek.evaluateHandle(c => c.parentElement); await p.waitForTimeout(150); await sp.asElement().evaluate(e => e.click()); await p.waitForTimeout(400); continue; }
      if (await p.evaluate(() => document.getElementById('expedition').querySelector('.bush-spot:not([hidden])') && Array.from(document.querySelectorAll('.critter')).some(c => c.innerHTML === '') && false)) {}
      // click visible spots one at a time
      const spots = await p.$$('.bush-spot:not([hidden])');
      if (!spots.length) { await p.waitForTimeout(400); continue; }
      const isPeek = await p.evaluate(() => document.querySelectorAll('.bush-spot .critter').length && Array.from(document.querySelectorAll('.bush-spot')).every(s => !s.hidden) && document.getElementById('bubble-text').textContent.includes('Watch'));
      if (isPeek) { await p.waitForTimeout(300); continue; }
      await spots[guard % spots.length].evaluate(e => e.click());
      await p.waitForTimeout(450);
      if (guard === 1) await p.screenshot({ path: `m${idx}-b.png` });
    }
    await p.waitForTimeout(1000);
    const ok = await found();
    for (let k = 0; ok && k < 10; k++) {
      const pts = await p.evaluate(() => [...document.querySelectorAll('.sand:not(.gone)')].map(e => { const r = e.getBoundingClientRect(); return [r.x + r.width/2, r.y + r.height/2]; }));
      if (!pts.length) break;
      for (const [x,y] of pts) { await p.mouse.move(x,y); await p.mouse.down(); await p.mouse.up(); await p.waitForTimeout(60); }
      await p.waitForTimeout(400);
    }
    if (idx === 12) await p.screenshot({ path: 'm12-dug.png' });
    if (ok) { await p.click('#take-btn'); await p.waitForTimeout(1300); }
    results.push(idx + ':' + (ok ? 'done' : 'STUCK') + ' "' + (await p.textContent('#bubble-text')).slice(0, 50) + '"');
  }
  console.log(results.join('\n'));
  console.log('stars', await p.textContent('#star-count'), 'errors', errs);
  await b.close();
})();
