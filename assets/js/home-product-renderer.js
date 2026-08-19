(function () {
  function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
      const parts = line.split(',');
      const obj = {};
      headers.forEach((h, i) => obj[h] = parts[i] ? parts[i].trim() : '');
      return obj;
    });
  }

  function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  window.handleImageError = function (img, brand, pack, cat, fallback) {
    let attempt = parseInt(img.getAttribute('data-fallback-attempt') || '0', 10);
    attempt++;
    img.setAttribute('data-fallback-attempt', attempt);

    const b = capitalize(brand);
    const p = pack.trim();
    let c = cat.trim();
    let lowerC = c.toLowerCase();
    if (lowerC === 'tablet') c = 'Tablets';
    else if (lowerC === 'capsule') c = 'Capsules';
    else if (lowerC === 'ointement' || lowerC === 'ointment') c = 'Cream';
    else if (lowerC === 'dry syrup') c = 'Dry Syrup';
    else if (lowerC === 'softgel') c = 'Softgel Capsules';
    else c = capitalize(c);

    const fallbacks = [];

    // Helper to add unique fallback
    const addFallback = (filename) => {
      if (filename && !fallbacks.includes(filename)) {
        fallbacks.push(filename);
      }
    };

    // Default attempts:
    // 1. Standard constructed name
    addFallback(`${b} ${p} ${c}.webp`);
    // 2. Try without pack size
    addFallback(`${b} ${c}.webp`);

    // Clean up description metadata and colors from the brand name
    let brandCleaned = b
      .replace(/\s+new\s+pack/i, '')
      .replace(/\s+clear\s+pvc/i, '')
      .replace(/\s+r\/w/i, '')
      .replace(/\s+yellow\/grey/i, '')
      .replace(/\s+blue\/grey/i, '')
      .replace(/\s+sky\s+blue\/white/i, '')
      .replace(/\s+orange\/orange/i, '')
      .replace(/\s+y\/y/i, '')
      .replace(/\s+combi\s+pack/i, '')
      .replace(/\s+combo\s+pack/i, '')
      .trim();

    // Try cleaned brand variations
    addFallback(`${brandCleaned} ${p} ${c}.webp`);
    addFallback(`${brandCleaned} ${c}.webp`);

    // Category mapping variations (Tablet vs Tablets vs Tab)
    const categoryVariations = [c];
    if (c.toLowerCase().includes('tablet')) {
      categoryVariations.push('Tablets', 'Tablet', 'Tab');
    } else if (c.toLowerCase().includes('capsule')) {
      categoryVariations.push('Capsules', 'Capsule', 'Caps', 'Cap');
    } else if (c.toLowerCase().includes('syrup')) {
      categoryVariations.push('Syrup', 'Dry Syrup', 'Suspension', 'Oral Solution');
    } else if (c.toLowerCase().includes('cream') || c.toLowerCase().includes('ointment') || c.toLowerCase().includes('gel')) {
      categoryVariations.push('Cream', 'Ointment', 'Ointement', 'Gel');
    }

    const brandHyphenated = brandCleaned.replace(/\s+/g, '-');
    const brandSpaced = brandCleaned.replace(/\-/g, ' ');

    categoryVariations.forEach(catVar => {
      addFallback(`${brandCleaned} ${p} ${catVar}.webp`);
      addFallback(`${brandCleaned} ${catVar}.webp`);
      addFallback(`${brandHyphenated} ${p} ${catVar}.webp`);
      addFallback(`${brandHyphenated} ${catVar}.webp`);
      addFallback(`${brandSpaced} ${p} ${catVar}.webp`);
      addFallback(`${brandSpaced} ${catVar}.webp`);
    });

    // Handle slashes in brand name (e.g. 10/1000 -> 1000)
    if (brandCleaned.includes('/')) {
      const brandNoSlash = brandCleaned.replace(/\d+\//g, '');
      categoryVariations.forEach(catVar => {
        addFallback(`${brandNoSlash} ${p} ${catVar}.webp`);
        addFallback(`${brandNoSlash} ${catVar}.webp`);
      });
    }

    // Try adding 'mg' after brand numbers (e.g. CORTIDRON-100 -> Cortidron 100mg)
    if (/\d+/.test(brandCleaned)) {
      const brandWithMg = brandCleaned.replace(/(\d+)/g, '$1mg');
      categoryVariations.forEach(catVar => {
        addFallback(`${brandWithMg} ${p} ${catVar}.webp`);
        addFallback(`${brandWithMg} ${catVar}.webp`);
        addFallback(`${brandWithMg.replace(/\s+/g, '-')} ${catVar}.webp`);
      });
    }

    // Try stripping special characters
    const brandSimplified = brandCleaned.replace(/[^a-zA-Z0-9]/g, ' ');
    categoryVariations.forEach(catVar => {
      addFallback(`${brandSimplified} ${p} ${catVar}.webp`);
      addFallback(`${brandSimplified} ${catVar}.webp`);
    });

    // Specific hardcoded overrides for highly irregular ones
    const brandLower = brand.toLowerCase().trim();
    if (brandLower.includes('cortidron-100')) {
      addFallback('Cortidron 100mg injection.webp');
    }
    if (brandLower.includes('candivent') && lowerC.includes('powder')) {
      addFallback('Candivent Powder 75g.webp');
    }
    if (brandLower.includes('protiminta')) {
      if (brandLower.includes('american') || brandLower.includes('amarican')) {
        addFallback('Protiminta Amarican Icecream.webp');
      } else if (brandLower.includes('kesar')) {
        addFallback('Protiminta Kesar Pista.webp');
      }
    }
    if (brandLower.includes('coligut-l')) {
      if (lowerC.includes('dry syrup')) {
        addFallback('Coligut-L Dry Syrup 30ml.webp');
      } else if (lowerC.includes('sachet')) {
        addFallback('Coligut L 50x1g Sachet.webp');
      } else if (lowerC.includes('capsule')) {
        addFallback('Coligut-L Capsule 10x1x10.webp');
      }
    }
    if (brandLower.includes('dilustone 1b6')) {
      addFallback('Dilustone Syrup 200ml.webp');
    }
    if (brandLower === 'dilustone' && lowerC.includes('capsule')) {
      addFallback('Dilustone 30 N Capsules.webp');
    }
    if (brandLower.includes('healodine') && (lowerC.includes('ointement') || lowerC.includes('ointment'))) {
      addFallback('Healodine 15g Ointment.webp');
    }
    if (brandLower.includes('healodine') && lowerC.includes('powder')) {
      addFallback('Healodine Powder 10g.webp');
    }
    if (brandLower.includes('healodine') && lowerC.includes('solution')) {
      if (brandLower.includes('5%')) {
        addFallback('Healodine Solution 500ml.webp');
      } else {
        addFallback('Healodine Solution 100ml 10%.webp');
      }
      addFallback('Healodine Solution 500ml.webp');
      addFallback('Healodine Solution 100ml 10%.webp');
    }
    if (brandLower.includes('ventolyte')) {
      addFallback('ORS 50 Sachets.webp');
    }
    if (brandLower.includes('flutigra az')) {
      addFallback('Flutigra-AZ nasal spary 7ml.webp');
    }
    if (brandLower.includes('ketojet ct') || brandLower === 'ketojet ct') {
      addFallback('Ketojet-CT 75g Soap.webp');
    }
    if (brandLower.includes('ketojet-200')) {
      addFallback('KETOJET-200 1x10 Tablet.webp');
    }
    if (brandLower.includes('kneeguard plus')) {
      addFallback('Kneeguard plus 10x1x10 Softgel Capsules.webp');
    }
    if (brandLower === 'kneeguard' && lowerC.includes('sachet')) {
      addFallback('Kneeguard Sachet 10x5g.webp');
    }
    if (brandLower.includes('levotramine-10')) {
      addFallback('Levotramine-10 20x10 Tablets.webp');
    }
    if (brandLower === 'levotramine' && lowerC.includes('syrup')) {
      addFallback('Levotramine-Syrup 30ml.webp');
    }
    if (brandLower.includes('ranilium-150')) {
      addFallback('Ranilium-150 20x30 Tablets.webp');
    }
    if (brandLower === 'ranilium' && lowerC.includes('injection')) {
      addFallback('Ranilium 50mg 10x5x2 Injection.webp');
    }
    if (brandLower.includes('ranilium-o combi pack') || brandLower.includes('ranilium-o combipack')) {
      addFallback('Ranilium-O Combipack Injection.webp');
    }
    if (brandLower.includes('ranilium-spas') && lowerC.includes('syrup')) {
      addFallback('Ranilium Spas Syrup 30ml.webp');
    }
    if (brandLower.includes('sensovent mouthwash') || brandLower === 'sensovent mouthwash') {
      addFallback('Sensovent 100ml Mouthwash.webp');
    }
    if (brandLower === 'sensovent' && lowerC.includes('paste')) {
      addFallback('Sensovent Toothpaste 80g.webp');
    }
    if (brandLower.includes('terbiride-250')) {
      addFallback('Terbiride 250gm 10x1x7 Tablets.webp');
    }
    if (brandLower.includes('tusston dx')) {
      addFallback('Tusston DX Syrup 100ml.webp');
    }
    if (brandLower.includes('udivent-300')) {
      addFallback('Udivent-300 Tablet.webp');
    }
    if (brandLower.includes('sinovent saline') || brandLower.includes('sinovent-saline')) {
      addFallback('Sinovent-Saline Nasal Spray 20ml.webp');
    }
    if (brandLower === 'terbiride' && (lowerC.includes('ointement') || lowerC.includes('ointment') || lowerC.includes('cream'))) {
      addFallback('Terbiride Cream 15g.webp');
    }
    if (brandLower === 'udivent' && lowerC.includes('syrup')) {
      addFallback('Udivent Suspension 100ml.webp');
    }
    if (brandLower === 'ventoxol-l' && lowerC.includes('syrup')) {
      addFallback('Ventoxol-L 60ml Syrup.webp');
    }
    if (brandLower === 'xiotil' && lowerC.includes('syrup')) {
      addFallback('Xiotil-125mg Dry Syrup.webp');
    }
    if (brandLower.includes('ventimox-cv 1.2 gm') || brandLower.includes('ventimox-cv 1.2gm')) {
      addFallback('Ventimox CV 1.2gm Injection.webp');
    }
    if (brandLower.includes('ventoran 2x') && lowerC.includes('spray')) {
      if (p.includes('75g') || p.includes('75gm')) {
        addFallback('Ventoran-2x Spray 75gm.webp');
      } else {
        addFallback('Ventoran-2x Spray 35gm.webp');
      }
      addFallback('Ventoran-2x Spray 75gm.webp');
      addFallback('Ventoran-2x Spray 35gm.webp');
    }
    if (brandLower.includes('ventoran-a')) {
      addFallback('Ventoran-A 20x10 Tablets.webp');
    }
    if (brandLower === 'ventoran' && lowerC.includes('injection')) {
      addFallback('Ventoran 10x5x1 Injection.webp');
    }
    if (brandLower.includes('ventoxol-ls drops') || brandLower.includes('ventoxol-ls drop')) {
      addFallback('Ventoxol-LS 15ml Drops.webp');
    }
    if (brandLower.includes('xiotil-250')) {
      addFallback('Xiotil 250mg 10x1x10 Tablets.webp');
    }
    if (brandLower === 'ventocal' && lowerC.includes('syrup')) {
      addFallback('Ventocal Syrup 200ml.webp');
    }
    if (brandLower.includes('cilarol-m25') || brandLower.includes('cilarol m-25')) {
      addFallback('CILAROL M-25 20x10 Tablets.webp');
      addFallback('Cilarol M-25 20x10 Tablets.webp');
      addFallback('Cilarol-M 25 20x10 Tablets.webp');
    }
    if (brandLower.includes('cilarol-m50') || brandLower.includes('cilarol-m 50')) {
      addFallback('Cilarol-M 50 20x10 Tablets.webp');
    }
    if (brandLower.includes('daophage-g1') && !brandLower.includes('forte')) {
      addFallback('Daophage-G1 10x2x15 Tab.webp');
    }
    if (brandLower.includes('daophage-g1 forte') || brandLower.includes('daophage-g1-forte')) {
      addFallback('Daophage-G1-Forte 10x15 Tablets.webp');
    }
    if (brandLower.includes('dapalift-m 10/1000')) {
      addFallback('Dapalift-M 1000-10x10 Tablets.webp');
    }
    if (brandLower.includes('dapalift-m 10/500')) {
      addFallback('Dapalift-M 500 10x10 Tablets.webp');
    }
    if (brandLower.includes('dermovent fp') || brandLower.includes('dermovent-fp')) {
      addFallback('Dermovent-FP 10x2x10 Tablets.webp');
    }
    if (brandLower.includes('doloride cold')) {
      addFallback('Doloride-Cold Plastic 80x10 Tablets.webp');
      addFallback('Doloride-Cold 20x10 Tablets.webp');
    }
    if (brandLower.includes('dolosaid 200 sr') || brandLower.includes('dolosaid 200sr')) {
      addFallback('Dolosaid 200SR-20x10 Tab.webp');
    }
    if (brandLower.includes('dolosaid p') || brandLower.includes('dolosaid-p')) {
      addFallback('Dolosaid-P 30x10 Tablets.webp');
    }
    if (brandLower.includes('dolosaid rab sr') || brandLower.includes('dolosaid-rab sr')) {
      addFallback('Dolosaid-RAB SR 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('dolosaid-100') || brandLower.includes('dolosaid 100')) {
      addFallback('Dolosaid 100mg 20x10 Tab.webp');
    }
    if (brandLower.includes('dolosaid-mr')) {
      addFallback('Dolosaid-MR 20x10 Tablets.webp');
    }
    if (brandLower.includes('dydrobenz')) {
      addFallback('DydroBenz-10x1x10 Tablets.webp');
    }
    if (brandLower.includes('emivent md')) {
      addFallback('EmiventM-DT-20x10 Tablets.webp');
    }
    if (brandLower.includes('enzovent plus')) {
      addFallback('Enzovent-Plus 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('epilevitra-1000')) {
      addFallback('Epilevitra-1000 10X10 Tablets.webp');
    }
    if (brandLower.includes('epilevitra-250')) {
      addFallback('Epilevitra-250 10X10 Tablets.webp');
    }
    if (brandLower.includes('epilevitra-750')) {
      addFallback('Epilevitra-750 10X10 Tablets.webp');
    }
    if (brandLower.includes('esovent-dsr') || brandLower.includes('esovent dsr')) {
      addFallback('Esovent DSR Capsules 10x1x10.webp');
    }
    if (brandLower.includes('esovent-it') || brandLower.includes('esovent it')) {
      addFallback('Esovent IT 10x10 Tablets.webp');
    }
    if (brandLower.includes('fepadol kid')) {
      addFallback('Fepadol-Kid Drops 15ml.webp');
    }
    if (brandLower.includes('fepasulide p') || brandLower.includes('fepasulide-p')) {
      addFallback('Fepasulide-P 25x2x10 Tablets.webp');
    }
    if (brandLower.includes('feriminta plus')) {
      addFallback(`Feriminta-PLUS ${p} Syrup.webp`);
      addFallback('Feriminta-PLUS 225ml Syrup.webp');
      addFallback('Feriminta-PLUS 450ml Syrup.webp');
    }
    if (brandLower.includes('fertivent f')) {
      addFallback('Fertivent-F 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('fertivent m')) {
      addFallback('Fertivent-M 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('flucovent 200') || brandLower.includes('flucovent-200')) {
      addFallback('Flucovent-200 2x1 Tablet 40x2x1.webp');
    }
    if (brandLower.includes('foliride gold')) {
      addFallback('Foliride-GOLD 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('gabavent nt 400') || brandLower.includes('gabavent-nt 400')) {
      addFallback('Gabavent-NT 400 20x10 Tablets.webp');
    }
    if (brandLower.includes('gasfiz mint') || brandLower.includes('gasfiz paan')) {
      if (brandLower.includes('paan')) {
        addFallback('Gasfiz Suspension Paan 170ml.webp');
      } else {
        addFallback('Gasfiz Suspension  170ml.webp');
      }
    }
    if (brandLower.includes('itromax oc')) {
      addFallback('Itromax-OC 15gm Cream.webp');
    }
    if (brandLower.includes('itromax sb 130')) {
      addFallback('Itromax-SB-130mg 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('itromax sb 65')) {
      addFallback('Itromax-SB-65mg 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('lansoup-15 junior') || brandLower.includes('lansoup 15 junior')) {
      addFallback('Lansoup-JUNIOR 15 10x10 Tablets.webp');
    }
    if (brandLower.includes('laxivent') && lowerC.includes('syrup')) {
      addFallback('Laxivent Oral Emulsion 170ml.webp');
    }
    if (brandLower.includes('linaglys-m 2.5/500') || brandLower.includes('linaglys-m 2-5-500')) {
      addFallback('Linaglys-M 2-5-500 10x10 Tablets.webp');
    }
    if (brandLower.includes('lipivent-f 10') || brandLower.includes('lipivent-f')) {
      addFallback('Lipivent-F 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('livominta sl')) {
      addFallback('LIVOMINTA-SL 10x1x10 Softgel Capsules.webp');
    }
    if (brandLower.includes('lizubiotic-600')) {
      addFallback('LIZUBIOTIC 600 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('lulinaz 4d')) {
      addFallback('Lulinaz- 4D 20gm Cream.webp');
    }
    if (brandLower.includes('meroride-1000')) {
      addFallback('Meroride 1000 INJECTION.webp');
    }
    if (brandLower.includes('metovent-25 xl') || brandLower.includes('metovent 25 xl')) {
      addFallback('Metovent 25XL 20x10 Tablets.webp');
    }
    if (brandLower.includes('metovent-50 xl') || brandLower.includes('metovent 50 xl')) {
      addFallback('Metovent 50XL 20x10 Tablets.webp');
    }
    if (brandLower.includes('montiride-lc')) {
      addFallback('Montirided-LC 20x10 Tablets.webp');
    }
    if (brandLower.includes('moxilanta 250')) {
      addFallback('Moxilanta-250 10x3x10  Capsules.webp');
    }
    if (brandLower.includes('moxilanta 500')) {
      addFallback('Moxilanta-500 10x3x10  Capsules.webp');
    }
    if (brandLower.includes('moxilet-400')) {
      addFallback('Moxilet 400 10x1x5 Tablets.webp');
    }
    if (brandLower.includes('mylabion-d3 forte')) {
      addFallback('Mylabion D3 Forte 1x10 Tablets.webp');
    }
    if (brandLower.includes('mylabion-lc')) {
      addFallback('Mylabion LC 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('new montiride-fxa')) {
      addFallback('NEW Montiride FXA Tablets 10X1X10.webp');
    }
    if (brandLower.includes('nimuvent cold')) {
      addFallback('Nimuvent-COLD 25x2x10 Tablets.webp');
    }
    if (brandLower.includes('nodigyl 400')) {
      addFallback('Nodigyl-400 10x2x15 Tablets.webp');
    }
    if (brandLower.includes('oftirol oh')) {
      addFallback('Oftirol-OH Tablets 20x10.webp');
    }
    if (brandLower.includes('oftirol-200 tab')) {
      addFallback('Oftirol-200 30x10 Tablets.webp');
    }
    if (brandLower.includes('omiup caps')) {
      addFallback('Omiup 20x20 Capsules.webp');
    }
    if (brandLower.includes('omiup-d cap')) {
      addFallback('Omiup-D 20x20 Capsules.webp');
    }
    if (brandLower.includes('ondilium md 8')) {
      addFallback('Ondilium-MD 8 20x10 Tablets.webp');
    }
    if (brandLower.includes('pantoraz-dsr')) {
      addFallback('Pantoraz DSR 20x10 Capsules.webp');
    }
    if (brandLower.includes('picovent-laxative')) {
      addFallback('Picovent Syrup 100ml.webp');
    }
    if (brandLower.includes('piptavent-4.5')) {
      addFallback('Piptavent 4-5g Injection.webp');
    }
    if (brandLower.includes('pregavent-75')) {
      addFallback('Pregavent 75mg 10x10 Capsules.webp');
    }
    if (brandLower.includes('pregavent-d 75/20')) {
      addFallback('Pregavent-D 75-20 10x10 Capsules.webp');
    }
    if (brandLower.includes('proditil cv 100/62.5')) {
      addFallback('Proditil CV 100+62.5 10x1x10 Dry Syrup.webp');
      addFallback('Proditil-CV Dry Syrup 30ml.webp');
    }
    if (brandLower === 'proditil' && lowerC.includes('drop')) {
      addFallback('Proditil Drops 10ml.webp');
    }
    if (brandLower.includes('proditil-100') && lowerC.includes('tablet')) {
      addFallback('Proditil-100 30ml Tablets.webp');
    }
    if (brandLower === 'proditil-cv' && lowerC.includes('syrup')) {
      addFallback('Proditil-CV Dry Syrup 30ml.webp');
      addFallback('Proditil-Cv 30ml Dry Syrup.webp');
    }
    if (brandLower.includes('ranilium-300')) {
      addFallback('Ranilium 300mg 20x10 Tablets.webp');
    }
    if (brandLower.includes('ranilium-o combi pack') || brandLower.includes('ranilium-o combipack')) {
      addFallback('Ranilium-O Combipack Injection.webp');
    }
    if (brandLower.includes('razodrot--ds')) {
      addFallback('Razodrot-DS 80mg 10x15 Tablets.webp');
    }
    if (brandLower.includes('razotran-500')) {
      addFallback('Razotran 500mg 10x10 Tablets.webp');
    }
    if (brandLower.includes('rejuvital musli-gold')) {
      addFallback('Rejuvital Gold Capsules 10x1x10.webp');
    }
    if (brandLower.includes('rozucard-gold 10')) {
      addFallback('Rozucard-Gold 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('rozucard-gold 20')) {
      addFallback('Rozucard-Gold-20 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('serravent d')) {
      addFallback('Serravent-D 6x5x10 Tablets.webp');
    }
    if (brandLower.includes('sinovent-forte')) {
      addFallback('Sinovent Forte 25x2x10 Tablets.webp');
    }
    if (brandLower.includes('sinovent-vapor')) {
      addFallback('Sinovent Vapor 20x10 Capsules.webp');
    }
    if (brandLower.includes('sitaglys 100')) {
      addFallback('Sitaglys-100mg 4x7 Tablets.webp');
    }
    if (brandLower.includes('sitaglys 50')) {
      addFallback('Sitaglys-50mg 4x7 Tablets.webp');
    }
    if (brandLower.includes('sitaglys dm')) {
      addFallback('Sitaglys-DM 100-10-1000 10x10 Tablets.webp');
      addFallback('Sitaglys-DM 100-10-500 10x10 Tablets.webp');
    }
    if (brandLower.includes('sitaglys m  50/1000') || brandLower.includes('sitaglys m 50/1000')) {
      addFallback('Sitaglys-M-50-1000 2x15 Tablets.webp');
    }
    if (brandLower.includes('sitaglys m  50/500') || brandLower.includes('sitaglys m 50/500')) {
      addFallback('Sitaglys-M-50-500 2x15 Tablets.webp');
    }
    if (brandLower.includes('skin-bloom')) {
      addFallback('Skinbloom 24x1x15gm Cream.webp');
    }
    if (brandLower.includes('soravent 6')) {
      addFallback('SORAVENT-6 12x30g Ointment.webp');
    }
    if (brandLower.includes('telirol b-2.5') || brandLower.includes('telirol b-2-5')) {
      addFallback('Telirol-B 2.5 10x10 Tablets.webp');
    }
    if (brandLower.includes('telirol b-5')) {
      addFallback('Telirol-B 5 10x10 Tablets.webp');
    }
    if (brandLower.includes('telirol ct 40/12.5')) {
      addFallback('Telirol-CT 40-12_5 10x15 Tablets.webp');
    }
    if (brandLower.includes('terbiride-500')) {
      addFallback('Terbiride 500mg 10x1x7 Tablets.webp');
    }
    if (brandLower.includes('torigesic plus')) {
      addFallback('Torigesic-Plus 20x10 Tablets.webp');
    }
    if (brandLower.includes('torigesic-120')) {
      addFallback('Torigesic 120mg 20x10 Tablets.webp');
    }
    if (brandLower.includes('torigesic-60')) {
      addFallback('Torigesic 60mg 20x10 Tablets.webp');
    }
    if (brandLower.includes('torigesic-90')) {
      addFallback('Torigesic 90mg 20x10 Tablets.webp');
    }
    if (brandLower.includes('torigesic-th4')) {
      addFallback('Torigesic TH4 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('torigesic-th8')) {
      addFallback('Torigesic TH8 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('torsevent-10')) {
      addFallback('Torsevent 10mg 4x5x10 Tablets.webp');
    }
    if (brandLower.includes('torsevent-20')) {
      addFallback('Torsevent 20mg 4x5x10 Tablets.webp');
    }
    if (brandLower.includes('trizacet cold ds rf') || brandLower.includes('trizacet cold ds')) {
      addFallback('Trizacet Cold DS Suspension.webp');
    }
    if (brandLower.includes('trizacet cold rf')) {
      addFallback('Trizacet Cold RF Syrup 60ml.webp');
    }
    if (brandLower.includes('trizacet-cold rf') || brandLower.includes('trizacet cold rf')) {
      addFallback('Trizacet Cold New pack 25x10 Tablets.webp');
    }
    if (brandLower.includes('tusston super')) {
      addFallback('Tusston-Super 100 ml Syrup.webp');
      addFallback('Tusston-Super 60 ml Syrup.webp');
    }
    if (brandLower.includes('uriride 0.4') || brandLower.includes('uriride-0.4')) {
      addFallback('Uriride-0-4mg 10x20 Capsules.webp');
    }
    if (brandLower.includes('utiquin-htz')) {
      addFallback('Utiquin-H TZ 10x4x10 Tablets.webp');
    }
    if (brandLower.includes('ventimox 150mg')) {
      addFallback('Ventimox 60ml Dry Syrup.webp');
    }
    if (brandLower.includes('ventimox plus kid tab') || brandLower.includes('ventimox plus kid')) {
      addFallback('Ventimox Plus KID 20x10 Tablets.webp');
    }
    if (brandLower.includes('ventimox plus lb')) {
      if (brandLower.includes('sky blue') || brandLower.includes('white')) {
        addFallback('Ventimox PLUS-LB 10x2x10 Capsule.webp');
      } else {
        addFallback('VENTIMOX PLUS LB (Blue-Grey) 10x2x10 Capsule.webp');
      }
      addFallback('Ventimox PLUS-LB 10x2x10 Capsule.webp');
      addFallback('VENTIMOX PLUS LB (Blue-Grey) 10x2x10 Capsule.webp');
    }
    if (brandLower.includes('ventimox-250')) {
      if (brandLower.includes('r/w') || brandLower.includes('red') || brandLower.includes('white')) {
        addFallback('Ventimox-250mg 10x3x10 Capsules (red white).webp');
      } else {
        addFallback('Ventimox-250mg 10x3x10 Capsules (Yellow Grey).webp');
      }
      addFallback('Ventimox-250mg 10x3x10 Capsules (red white).webp');
      addFallback('Ventimox-250mg 10x3x10 Capsules (Yellow Grey).webp');
    }
    if (brandLower.includes('ventimox-500')) {
      if (brandLower.includes('orange')) {
        addFallback('Ventimox-500 10x2x10 Capsules ORANGE.webp');
      } else {
        addFallback('Ventimox-500 10x2x10 Capsules Yellow.webp');
      }
      addFallback('Ventimox-500 10x2x10 Capsules ORANGE.webp');
      addFallback('Ventimox-500 10x2x10 Capsules Yellow.webp');
    }
    if (brandLower.includes('ventimox-cv 1000')) {
      addFallback('Ventimox-CV 1000 Tablet 10x1x10.webp');
    }
    if (brandLower.includes('ventimox-cv 228.5')) {
      addFallback('Ventimox- CV 228.5 Dry Syrup 30ML.webp');
      addFallback('Ventimox-CV 228-5 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('ventimox-cv 457')) {
      addFallback('Ventimox- CV 457 Dry Syrup 30ML.webp');
      addFallback('Ventimox CV 457 Dry Syrup 30ml.webp');
    }
    if (brandLower.includes('ventocain')) {
      addFallback('Ventocain Liquid Gel 170ml.webp');
    }
    if (brandLower.includes('ventocal-d3') || brandLower.includes('ventocal d3')) {
      addFallback('Ventocal D3 Softgel Capsules.webp');
    }
    if (brandLower.includes('ventocal-xt') || brandLower.includes('ventocal xt')) {
      addFallback('Ventocal XT 20x15 Tablets.webp');
    }
    if (brandLower.includes('ventocold dm')) {
      if (brandLower.includes('junior')) {
        addFallback('Ventocold DM Junior Syrup 60ml.webp');
      } else {
        addFallback('Ventocold DM Syrup 100ml.webp');
      }
    }
    if (brandLower.includes('ventocortil-10')) {
      addFallback('Ventocortil 10mg 10x5x10 Tablets.webp');
    }
    if (brandLower.includes('ventocortil-20')) {
      addFallback('Ventocortil 20mg 20x10 Tablets.webp');
    }
    if (brandLower.includes('ventocortil-5')) {
      addFallback('Ventocortil 5mg 10x5x10 Tablets.webp');
    }
    if (brandLower.includes('ventokast lc') || brandLower.includes('ventokast-lc')) {
      if (brandLower.includes('junior')) {
        addFallback('Ventokast-LC Junior 10x1x10 Tablets.webp');
      } else {
        addFallback('Ventokast-LC Syrup 60ml.webp');
        addFallback('Ventokast-LC Syrup 30ml.webp');
        addFallback('Ventokast-Lc 20x1x10 Tablets.webp');
        addFallback('Ventokast LC 20x1x10 Tablets.webp');
      }
    }
    if (brandLower.includes('ventophagus-20')) {
      addFallback('Ventophagus 20 10x10 Tablets.webp');
    }
    if (brandLower.includes('ventophyline-s') || brandLower.includes('ventophylin-s')) {
      addFallback('Ventophylin-S 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('ventophylin-xl') || brandLower.includes('ventophylin xl')) {
      addFallback('Ventophylin XL 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('ventoran 2x')) {
      addFallback('Ventoran 2X pain gel 30gm.webp');
      addFallback('VENTORAN 2X PAIN SPRAY 35G.webp');
      addFallback('Ventoran-2x Spray 35gm.webp');
      addFallback('Ventoran-2x Spray 75gm.webp');
    }
    if (brandLower.includes('ventoran pain')) {
      if (p.includes('30g') || p.includes('30gm')) {
        addFallback('Ventoran Pain-Gel 30g.webp');
      } else if (p.includes('10g') || p.includes('10gm')) {
        addFallback('Ventoran Pain-Gel 10g.webp');
        addFallback('Ventoran 10g Pain-Gel single.webp');
      }
      addFallback('Ventoran Pain-Gel 30g.webp');
      addFallback('Ventoran 10g Pain-Gel single.webp');
      addFallback('Ventoran 25x1x10g Pain-Gel.webp');
      addFallback('Ventoran 25x1x30g Pain-Gel.webp');
      addFallback('Ventoran-Pain Oil 50ml.webp');
    }
    if (brandLower.includes('ventoran-100 sr') || brandLower.includes('ventoran-100sr')) {
      addFallback('Ventoran SR  100mg Tablets.webp');
    }
    if (brandLower.includes('ventoran-p')) {
      addFallback('Ventoran-P 10x2x10 Tablets White PVC.webp');
      addFallback('Ventoran-P 10x2x10 Tablets Yellow PVC.webp');
      addFallback('Ventoran-P 30x10 Tablets.webp');
      addFallback('Ventoran-P 10x2x10 Tablets.webp');
    }
    if (brandLower.includes('ventoxol-ls junior')) {
      addFallback('Ventoxol-LS Junior Syrup 60ml.webp');
    }
    if (brandLower.includes('venzolid dry')) {
      addFallback('VenZolid Dry Syrup 100mg.webp');
    }
    if (brandLower.includes('venzolid-600')) {
      addFallback('Venzolid 600mg 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('wormiband-400') || brandLower.includes('wormiband 400')) {
      addFallback('Wormiband 400 10x10x1 Tablets.webp');
    }
    if (brandLower.includes('xiotil-500')) {
      addFallback('Xiotil 500mg 10x1x10 Tablets.webp');
    }
    if (brandLower.includes('xiotil-cv 625')) {
      addFallback('Xiotil-CV 625mg 10x1x6 Tablets.webp');
    }
    if (brandLower.includes('zincominta-rich') || brandLower.includes('zincominta rich')) {
      addFallback('Zincominta Rich 10x1x10 Capsules.webp');
    }
    if (brandLower.includes('zithroset-100 xl') || brandLower.includes('zithroset 100 xl')) {
      addFallback('Zithroset XL Dry Syrup 100mg.webp');
    }
    if (brandLower.includes('zithroset-200 xl') || brandLower.includes('zithroset 200 xl')) {
      addFallback('Zithroset XL Dry Syrup 200mg.webp');
    }
    if (brandLower.includes('zithroset-250')) {
      addFallback('Zithroset - 250mg 10x1x6 Tablets.webp');
    }
    if (brandLower.includes('zithroset-500')) {
      addFallback('Zithroset -500mg 10x1x3 Tablets.webp');
    }
    if (brandLower.includes('zithroset-3 kit') || brandLower.includes('zithroset 3 kit')) {
      addFallback('Zithroset - 3 Kit Tablets.webp');
    }
    if (brandLower.includes('zyfix 200-lb') || brandLower.includes('zyfix-200lb')) {
      addFallback('Zyfix-200LB 10x10 Tablets.webp');
    }
    if (brandLower.includes('calcivent k2 forte')) {
      addFallback(`Calcivent-k2 Forte ${p} Softgel Capsules.webp`);
    }
    if (brandLower.includes('calcivent-d3 max')) {
      addFallback(`Calcivent-D3 MAX ${p} Softgl Capsules.webp`);
    }
    if (brandLower.includes('candivent b')) {
      addFallback(`Candivent-B ${c} ${p}.webp`);
    }
    if (brandLower.includes('cefpovent-50')) {
      addFallback(`Cefpovent 50 ${c}.webp`);
    }
    if (brandLower.includes('ceftirol s-1.5')) {
      addFallback(`Ceftirol-S 1 5 g ${c}.webp`);
    }
    if (brandLower.includes('ceftirol s-375')) {
      addFallback(`Ceftirol S 375 ${c}.webp`);
    }
    if (brandLower.includes('ceftirol s-750')) {
      addFallback(`Ceftirol S 750  ${c}.webp`);
    }
    if (brandLower.includes('ceftirol-1g')) {
      addFallback(`Ceftirol 1g ${c}.webp`);
    }
    if (brandLower.includes('ceftirol-t 1.125')) {
      addFallback(`Ceftirol-T 1g+125mg ${c}.webp`);
    }
    if (brandLower.includes('citiride-p forte')) {
      addFallback(`Citiride-P Forte Tablet ${p}.webp`);
    }
    if (brandLower.includes('clarivent-125 oral')) {
      addFallback(`Clarivent-125 Dry Syrup.webp`);
    }

    // General fallback logic (case replacements, hyphens)
    if (b.includes(' 4g')) {
      addFallback(`${b.replace(' 4g', '-4G')} ${p} ${c}.webp`);
    }
    if (b.includes(' ')) {
      addFallback(`${b.replace(' ', '-')} ${p}.webp`);
    }
    if (b.toLowerCase().includes('dm')) {
      addFallback(`${b.replace(/ Dm/i, '-DM')} ${c.toUpperCase()} ${p.replace(/ml/i, ' ML')}.webp`);
    }
    if (brand.toLowerCase().includes('r/y')) {
      const brandOnly = b.split(' ')[0];
      addFallback(`${brandOnly} ${p} ${c} (YR).webp`);
    }
    if (b.includes(' ')) {
      addFallback(`${b.replace(' ', '-')} ${c}.webp`);
    }
    addFallback(`${b}.webp`);

    if (attempt <= fallbacks.length) {
      img.src = `./assets/img/WEBP/${fallbacks[attempt - 1]}`;
    } else {
      img.onerror = null;
      img.src = fallback;
    }
  };

  function guessImageFilename(brand, pack, cat) {
    let c = cat.trim();
    let lowerC = c.toLowerCase();
    if (lowerC === 'tablet') c = 'Tablets';
    else if (lowerC === 'capsule') c = 'Capsules';
    else if (lowerC === 'ointement' || lowerC === 'ointment') c = 'Cream';
    else if (lowerC === 'dry syrup') c = 'Dry Syrup';
    else if (lowerC === 'softgel') c = 'Softgel Capsules';
    else c = capitalize(c);

    let b = capitalize(brand);
    return `${b} ${pack} ${c}.webp`;
  }

  function generateHomeCards() {
    if (typeof rawCsvData === 'undefined') return;

    const products = parseCSV(rawCsvData);
    
    // Group products by division and reverse to prioritize recently added ones
    const divisions = {
      ultima: [],
      optima: [],
      innoventis: []
    };

    products.reverse().forEach(p => {
      if (!p['BRAND NAME']) return;
      const div = (p['Division'] || 'ultima').toLowerCase().trim();
      if (divisions[div]) {
        divisions[div].push(p);
      }
    });

    // Hide Innoventis tab dynamically if no products exist
    const innoventisFilterBtn = document.querySelector('.product-filters [data-filter="innoventis"]');
    if (innoventisFilterBtn && divisions.innoventis.length === 0) {
      innoventisFilterBtn.style.display = 'none';
    }

    // Limit to top 9 products from each division
    const maxItems = 9;
    const featuredUltima = divisions.ultima.slice(0, maxItems);
    const featuredOptima = divisions.optima.slice(0, maxItems);
    const featuredInnoventis = divisions.innoventis.slice(0, maxItems);

    // Interleave products so the "All" tab shows a balanced mix of divisions
    const allFeatured = [];
    const maxLen = Math.max(featuredUltima.length, featuredOptima.length, featuredInnoventis.length);
    for (let k = 0; k < maxLen; k++) {
      if (k < featuredUltima.length) allFeatured.push(featuredUltima[k]);
      if (k < featuredOptima.length) allFeatured.push(featuredOptima[k]);
      if (k < featuredInnoventis.length) allFeatured.push(featuredInnoventis[k]);
    }
    let html = '';

    allFeatured.forEach(p => {
      const rawBrandName = p['BRAND NAME'];
      const category = p['CATEGORY'] || 'General';
      const brandName = `${rawBrandName} ${capitalize(category)}`;
      const packSize = p['PACK SIZE '] || p['PACK SIZE'] || 'N/A';
      const mrp = p['MRP'] ? '₹ ' + parseFloat(p['MRP']).toFixed(2) : 'N/A';
      const division = (p['Division'] || 'ultima').toLowerCase().trim();

      const mapKey = `${rawBrandName.trim()} | ${packSize.trim()} | ${category.trim()}`;
      const mapImage = (typeof productImagesMap !== 'undefined' && productImagesMap[mapKey]) ? productImagesMap[mapKey] : null;
      const imageSrc = p['Image'] ? `./${p['Image']}` : (mapImage ? `./assets/img/WEBP/${mapImage}` : `./assets/img/WEBP/${guessImageFilename(rawBrandName, packSize, category)}`);
      const fallbackImage = './assets/img/logo.png';

      html += `
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 product-card-col" data-brand="${division}">
          <a href="products.html?search=${encodeURIComponent(rawBrandName)}" class="product-card-link" style="text-decoration: none; color: inherit; display: block;">
            <div class="product-card-ui">
              <div class="product-card-header">
                <h6 class="product-title-top">${brandName}</h6>
                <div class="product-title-divider"></div>
              </div>
              <div class="product-img-box">
                <img
                  src="${imageSrc}"
                  alt="${brandName}"
                  class="img-fluid"
                  onerror="if (typeof window.handleImageError === 'function') { window.handleImageError(this, '${rawBrandName.replace(/'/g, "\\\'")}', '${packSize.replace(/'/g, "\\\'")}', '${category.replace(/'/g, "\\\'")}', '${fallbackImage}'); } else { this.onerror=null; this.src='${fallbackImage}'; }"
                />
              </div>
              <div class="product-footer">
                <div class="product-footer-col">
                  <span class="product-footer-label">MRP</span>
                  <span class="product-footer-value">${mrp}</span>
                </div>
                <div class="product-footer-divider"></div>
                <div class="product-footer-col">
                  <span class="product-footer-label">Pack Size</span>
                  <span class="product-footer-value">${packSize}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      `;
    });

    const grid = document.getElementById('home-product-grid');
    if (grid) {
      grid.innerHTML = html;
    }
  }

  document.addEventListener('DOMContentLoaded', generateHomeCards);
})();
