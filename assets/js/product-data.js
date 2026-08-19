const rawCsvData = `BRAND NAME, CATEGORY,PACK SIZE ,MRP,Division,Image
Acipox- 400,Tablet,10X10,146.89,Ultima,assets/img/Ultima/Acipox- 400 10x10 General.webp
Acipox- 800,Tablet,10X10,404.98,Ultima,assets/img/Ultima/Acipox- 800 10x10 Tablets.webp
Acipox 15gm Cream,15gm,165.00,Ultima,assets/img/Ultima/Acipox 15gm Cream.webp
Actigrain-10,Tablet,20X10,51.76,Ultima,assets/img/Ultima/Actigrain-10 20x10 Tablets.webp
Activert-16,Tablet,20X10,106.05,Ultima,assets/img/Ultima/Activert-16 20x10 Tablets.webp
Activert-8,Tablet,10X10,48.77,Ultima,assets/img/Ultima/Activert-8 10x10 Tablets.webp
Amlovent-AT,Tablet,20X10,67.37,Ultima,assets/img/Ultima/Amlovent At 20x10tab Tablets.webp
Ampivent-C,Tablet,20x10,160.00,Ultima,assets/img/Ultima/Ampivent-C 20x10 Tablets.webp
Bactofix-100DT,Tablet,20x10,118.97,Ultima,assets/img/Ultima/Bactofix-100dt 20x10 Tablets.webp
Bactofix-CV 325,Tablet,10x1x6,224.60,Ultima,assets/img/Ultima/Bactofix-CV 325 10x1x6 Tablets.webp
Becominta-Total,Tablet,10x1x10,136.10,Ultima,assets/img/Ultima/Becominta-Total 10x1x10 Tablets.webp
Bilotra 20,Tablet,10x1x10,153.14,Ultima,assets/img/Ultima/Bilotra 20 10x1x10 Tablets.webp
Bilotra-M,Tablet,10x1x10,190.57,Ultima,assets/img/Ultima/Bilotra-M 10x1x10 Tablets.webp
Bisovent-2.5,Tablet,20x10,59.81,Ultima,assets/img/Ultima/Bisovent-2.5 20x10 Tablets.webp
Bisovent-5,Tablet,20x10,90.75,Ultima,assets/img/Ultima/BISOVENT 5 tablets 20x10.webp
Brivitra 50,Tablet,10x10,182.81,Ultima,assets/img/Ultima/Brivitra 50 10x10 Tablets.webp
Buscovent,Tablet,20x10,41.92,Ultima,assets/img/Ultima/Buscovent 20x10 Tablets.webp
Calcivent,Tablet,20x15,149.70,Ultima,assets/img/Ultima/Calcivent 20x15 Tablets.webp
Calcivent-2000,Tablet,5x2x15,342.18,Ultima,assets/img/Ultima/Calcivent-2000 5x2x15 Tablets.webp
Candivent-VT,Tablet,10x1x6,187.17,Ultima,assets/img/Ultima/Candivent-Vt 10x1x6 Tablets.webp
Capilate-Plus,Tablet,10x1x10,304.21,Ultima,assets/img/Ultima/Capilate-Plus 10x1x10 Tablets.webp
Carivent,Tablet,5x15,510.46,Ultima,assets/img/Ultima/Carivent 5x15 Tablets.webp
Cetrovent-A,Tablet,20X10,58.78,Ultima,assets/img/Ultima/Cetrovent-A 20x10 Tablets.webp
Chymoride Forte,Tablet,10x1x20,371.25,Ultima,assets/img/Ultima/Chymoride Forte 10x1x20 Tablets.webp
Cilarol-10,Tablet,20x10,112.30,Ultima,assets/img/Ultima/Cilarol-10 20x10 Tablets.webp
Cilarol M-25,Tablet,20x10,165.00,Ultima,assets/img/Ultima/CILAROL M-25 20x10 Tablets.webp
Cilarol M-50,Tablet,20x10,180.00,Ultima,assets/img/Ultima/Cilarol-M 50 20x10 Tablets.webp
Citiride 500,Tablet,10x1x10,723.73,Ultima,assets/img/Ultima/Citiride-500 10x1x10 Tablets.webp
Citiride-P Forte,Tablet,5x1x10,805.30,Ultima,assets/img/Ultima/Citiride-p Forte 5x1x10 Tablets.webp
Citiride-P,Tablet,10x1x10,754.35,Ultima,assets/img/Ultima/Citiride-P 10x1x10 Tablets.webp
Clarivent-250,Tablet,5X1X10,258.72,Ultima,assets/img/Ultima/Clarivent-250 5x1x10 Tablets.webp
Clarivent-500,Tablet,5X1X10,428.29,Ultima,assets/img/Ultima/Clarivent-500 5x1x10 Tablets.webp
Coligut-200,Tablet,10x1x10,217.80,Ultima,assets/img/Ultima/Coligut-200 10x1x10 Tablets.webp
Coligut-400,Tablet,10X1X10,340.30,Ultima,assets/img/Ultima/Coligut-400 10x1x10 Tablets.webp
Coligut-550,Tablet,10x1x10,510.46,Ultima,assets/img/Ultima/Coligut-550 10x1x10 Tablets.webp
Daophage G1,Tablet,10X2X15,131.00,Ultima,assets/img/Ultima/Daophage-G1 10x2x15 Tab.webp
Daophage-G2,Tablet,10X2X15,149.70,Ultima,assets/img/Ultima/Daophage-G2 10x2x15 Tablets.webp
Daophage-GP1,Tablet,10X2X15,155.96,Ultima,assets/img/Ultima/Daophage-Gp1 10x2x15 Tablets.webp
Daophage-GP2,Tablet,10x2x15,180.90,Ultima,assets/img/Ultima/Daophage-Gp2 10x2x15 Tablets.webp
Daophage-SR 500,Tablet,10X2X10,21.73,Ultima,assets/img/Ultima/Daophage-500 SR 10x2x10 Tablets.webp
Daophage-G 0.5,Tablet,10X15,111.37,Ultima,assets/img/Ultima/Daophage-G 0.5 10x15 Tablets.webp
Daophage-G1 Forte,Tablet,10X15,153.14,Ultima,assets/img/Ultima/Daophage-G1-Forte 10x15 Tablets.webp
Daophage-G2 Forte,Tablet,10X15,193.35,Ultima,assets/img/Ultima/Daophage-G2 Forte 10x15 Tablets.webp
Daozide-M,Tablet,10x2x10,85.00,Ultima,assets/img/Ultima/Daozide-M 10x2x10 Tablets.webp
Dapalift-10,Tablet,10x1x10,198.50,Ultima,assets/img/Ultima/Dapalift-10 10x1x10 Tablets.webp
Dapalift-M 10/1000,Tablet,10x10,144.37,Ultima,assets/img/Ultima/Dapalift-M 1000-10x10 Tablets.webp
Dapalift-M 10/500,Tablet,10x10,147.46,Ultima,assets/img/Ultima/Dapalift-M 500 10x10 Tablets.webp
Dapalift-V,Tablet,10x1x10,283.59,Ultima,assets/img/Ultima/Dapalift-V 10x1x10 Tablets.webp
Dermovent-500,Tablet,10X10,162.00,Ultima,assets/img/Ultima/Dermovent-500 10x10 Tablets.webp
Doloride Cold,Tablet,80X10,73.70,Ultima,assets/img/Ultima/Doloride-Cold Plastic 80x10 Tablets.webp
Doloride-Chymo,Tablet,20x10,147.40,Ultima,assets/img/Ultima/Doloride-Chymo 20x10 Tablets.webp
Doloride-MR,Tablet,10x10,125.91,Ultima,assets/img/Ultima/Doloride-Mr 10x10 Tablets.webp
Doloride-P,Tablet,20x10,73.60,Ultima,assets/img/Ultima/Doloride-P 10x2x10 Tablets.webp
Doloride-TH4,Tablet,10x1x10,174.60,Ultima,assets/img/Ultima/Doloride-Th4 10x1x10 Tablets.webp
Doloride-TH8,Tablet,10x1x10,255.23,Ultima,assets/img/Ultima/Doloride-Th8 10x1x10 Tablets.webp
Dolosaid 200 SR,Tablet,20x10,81.10,Ultima,assets/img/Ultima/Dolosaid 200SR-20x10 Tab.webp
Dolosaid-P,Tablet,30x10,66.90,Ultima,assets/img/Ultima/Dolosaid-P 30x10 Tablets.webp
Dolosaid-TP 8,Tablet,10x1x10,266.57,Ultima,assets/img/Ultima/Dolosaid -Tp 8 10x1x10 Tablets.webp
Dolosaid-100,Tablet,20x10,86.00,Ultima,assets/img/Ultima/Dolosaid 100mg 20x10 Tab.webp
Dolosaid-MR,Tablet,20x10,102.90,Ultima,assets/img/Ultima/Dolosaid-MR 20x10 Tablets.webp
Dolosaid-SP,Tablet,30x10,115.70,Ultima,assets/img/Ultima/Dolosaid-SP 30x10 Tablets.webp
Dolosaid-Spas,Tablet,20x10,99.82,Ultima,assets/img/Ultima/Dolosaid-Spas 20x10 Tablets.webp
Dolosaid-TP4,Tablet,10x1x10,221.20,Ultima,assets/img/Ultima/Dolosaid-Tp4 10x1x10 Tablets.webp
Dolovent-DT,Tablet,10x2x10,77.13,Ultima,assets/img/Ultima/Dolovent-Dt 10x2x10 Tablets.webp
Donacortil-30,Tablet,10x1x10,431.06,Ultima,assets/img/Ultima/Donacortil-30 10x1x10 Tablets.webp
Donacortil-6,Tablet,10x1x10,123.52,Ultima,assets/img/Ultima/Donacortil-6 10x1x10 Tablets.webp
Doximycin,Tablet,20x10,119.10,Ultima,assets/img/Ultima/Doximycin 20x10 Tablets.webp
Duopress-FM,Tablet,10x10,79.40,Ultima,assets/img/Ultima/Duopress-Fm 10x10 Tablets.webp
Emivent MD,Tablet,20x10,73.73,Ultima,assets/img/Ultima/EmiventM-DT-20x10 Tablets.webp
Enzovent Plus,Tablet,10x1x10,268.00,Ultima,assets/img/Ultima/Enzovent-Plus 10x1x10 Tablets.webp
Enzovent,Tablet,10x1x10,247.50,Ultima,assets/img/Ultima/Enzovent 10x1x10 Tablets.webp
Epilevitra-500,Tablet,20x10,139.65,Ultima,assets/img/Ultima/Epilevitra-500 20x10 Tablets.webp
Epilevitra-1000,Tablet,10x10,385.60,Ultima,assets/img/Ultima/Epilevitra-1000 10X10 Tablets.webp
Epilevitra-250,Tablet,10x10,67.72,Ultima,assets/img/Ultima/Epilevitra-250 10X10 Tablets.webp
Epilevitra-750,Tablet,10x10,196.77,Ultima,assets/img/Ultima/Epilevitra-750 10X10 Tablets.webp
Feburol-40,Tablet,10x1x10,129.60,Ultima,assets/img/Ultima/Feburol-40 10x1x10 Tablets.webp
Feburol-80,Tablet,10x1x10,181.50,Ultima,assets/img/Ultima/Feburol-80 10x1x10 Tablets.webp
Fepasulide-P,Tablet,25x2x10,52.18,Ultima,assets/img/Ultima/Fepasulide-P 25x2x10 Tablets.webp
Ferivent-XT,Tablet,10x1x10,203.00,Ultima,assets/img/Ultima/Ferivent-Xt 10x1x10 Tablets.webp
Fertivent-F,Tablet,10x10,311.44,Ultima,assets/img/Ultima/Fertivent-F 10x1x10 Tablets.webp
Fertivent-M,Tablet,10x10,333.68,Ultima,assets/img/Ultima/Fertivent-M 10x1x10 Tablets.webp
Flucovent-200,Tablet,40x1,18.77,Ultima,assets/img/Ultima/Flucovent-200 2x1 Tablet 40x2x1.webp
Flucovent-150,Tablet,40x2x1,12.96,Ultima,assets/img/Ultima/Flucovent-150 40x2x1 Tablets.webp
Foliride Gold,Tablet,10x1x10,181.50,Ultima,assets/img/Ultima/Foliride-GOLD 10x1x10 Tablets.webp
Foliride,Tablet,10x1x30,48.82,Ultima,assets/img/Ultima/Foliride 10x1x30 Tablets.webp
Gabavent-NT 400,Tablet,20x10,321.85,Ultima,assets/img/Ultima/Gabavent-NT 400 20x10 Tablets.webp
Gabavent-100,Tablet,10x10,65.70,Ultima,assets/img/Ultima/Gabavent-100 10x10 Tablets.webp
Gabavent-M 100,Tablet,10x10,96.42,Ultima,assets/img/Ultima/Gabavent-M 100 10x10 Tablets.webp
Gabavent-M 300,Tablet,10x1x10,174.69,Ultima,assets/img/Ultima/Gabavent-M 300 10x1x10 Tablets.webp
Gabavent-NT 100,Tablet,10x15,127.87,Ultima,assets/img/Ultima/Gabavent-Nt 100 10x15 Tablets.webp
Gabavent-NT 300,Tablet,10x1x10,164.48,Ultima,assets/img/Ultima/Gabavent-NT 300 10x1x10 Tablets.webp
Galvent-50,Tablet,10x15,262.04,Ultima,assets/img/Ultima/Galvent-50 10x15 Tablets.webp
Galvent-M 1000,Tablet,10x15,286.90,Ultima,assets/img/Ultima/Galvent-M 1000 10x15 Tablets.webp
Galvent-M 500,Tablet,10x15,274.51,Ultima,assets/img/Ultima/Galvent-M 500 10x15 Tablets.webp
Histarex-10,Tablet,20x15,37.40,Ultima,assets/img/Ultima/Histarex-10 20x15 Tablets.webp
Histarex-25,Tablet,20x15,73.61,Ultima,assets/img/Ultima/Histarex-25 20x15 Tablets.webp
Histigra-120,Tablet,10x1x10,155.97,Ultima,assets/img/Ultima/Histigra-120 10x1x10 Tablets.webp
Histigra-180,Tablet,10x1x10,199.65,Ultima,assets/img/Ultima/Histigra-180 10x1x10 Tablets.webp
Histigra-M,Tablet,10x1x10,147.46,Ultima,assets/img/Ultima/Histigra-M 10x1x10 Tablets.webp
Ibuvent-Plus,Tablet,20x10,30.90,Ultima,assets/img/Ultima/Ibuvent-Plus 20x10 Tablets.webp
Ketojet-200,Tablet,10x1x10,192.84,Ultima,assets/img/Ultima/KETOJET-200 1x10 Tablet.webp
Ketoride-DT,Tablet,20x15,107.30,Ultima,assets/img/Ultima/Ketoride-Dt 20x15 Tablets.webp
Knee Guard,Tablet,10x10,187.17,Ultima,assets/img/Ultima/Knee Guard 10x10 Tablets.webp
Lansoup-15 Junior,Tablet,10x10,70.31,Ultima,assets/img/Ultima/Lansoup-JUNIOR 15 10x10 Tablets.webp
Laxivent,Tablet,4x5x10,68.00,Ultima,assets/img/Ultima/Laxivent 100gm Powder.webp
Levotramine-10,Tablet,20x10,74.86,Ultima,assets/img/Ultima/Levotramine-10 20x10 Tablets.webp
Levotramine-5,Tablet,20x10,56.14,Ultima,assets/img/Ultima/Levotramine-5 20x10 Tablets.webp
Linaglys-5,Tablet,10x10,124.70,Ultima,assets/img/Ultima/Linaglys-5 10x10 Tablets.webp
Linaglys-M 2.5/500,Tablet,10x10,123.75,Ultima,assets/img/Ultima/Linaglys-M 2-5-500 10x10 Tablets.webp
Lipivent-10,Tablet,10x10,53.44,Ultima,assets/img/Ultima/Lipivent-10 10x10 Tablets.webp
Lipivent-20,Tablet,10x10,135.00,Ultima,assets/img/Ultima/Lipivent-20 10x10 Tablets.webp
Lipivent-40,Tablet,10x10,207.58,Ultima,assets/img/Ultima/Lipivent-40 10x10 Tablets.webp
Lipivent-F 10,Tablet,10x1x10,144.06,Ultima,assets/img/Ultima/Lipivent-F 10x1x10 Tablets.webp
Livominta,Tablet,10x10,85.00,Ultima,assets/img/Ultima/Livominta 10x10 Tablets.webp
Loxaquin-250,Tablet,10x1x10,51.76,Ultima,assets/img/Ultima/Loxaquin-250 10x1x10 Tablets.webp
Loxaquin-500,Tablet,10x1x10,96.70,Ultima,assets/img/Ultima/Loxaquin-500 10x1x10 Tablets.webp
Loxaquin-OZ,Tablet,10x1x10,111.16,Ultima,assets/img/Ultima/Loxaquin-Oz 10x1x10 Tablets.webp
Lumiart,Tablet,10x1x6,164.25,Ultima,assets/img/Ultima/Lumiart 10x1x6 Tablets.webp
Losaride-H,Tablet,20x10,74.86,Ultima,assets/img/Ultima/Losaride-H 20x10 Tablets.webp
Meftadol-P Forte,Tablet,20x10,65.88,Ultima,assets/img/Ultima/Meftadol-P Forte 20x10 Tablets.webp
Meftadol-Spas Ds,Tablet,20x10,60.11,Ultima,assets/img/Ultima/Meftadol-Spas DS 20x10 Tablets.webp
Meftadol-Spas,Tablet,30x10,56.14,Ultima,assets/img/Ultima/Meftadol-Spas 30x10 Tablets.webp
Metaxadol-D,Tablet,10x10,185.62,Ultima,assets/img/Ultima/Metaxadol-D 10x10 Tablets.webp
Methocort-16,Tablet,20x10,125.77,Ultima,assets/img/Ultima/Methocort-16 20x10 Tablets.webp
Methocort-4,Tablet,20x10,56.14,Ultima,assets/img/Ultima/Methocort-4 20x10 Tablets.webp
Methocort-8,Tablet,20x10,71.90,Ultima,assets/img/Ultima/Methocort-8 20x10 Tablets.webp
Metovent-25 XL,Tablet,20x10,45.67,Ultima,assets/img/Ultima/Metovent 25XL 20x10 Tablets.webp
Metovent-50 XL,Tablet,20x10,62.79,Ultima,assets/img/Ultima/Metovent 50XL 20x10 Tablets.webp
Migravent,Tablet,20x10,132.00,Ultima,assets/img/Ultima/Migravent 20x10 Tablets.webp
Montiride-AB,Tablet,10x10,243.75,Ultima,assets/img/Ultima/Montiride-Ab 10x10 Tablets.webp
Montiride-LA,Tablet,10x1x10,198.50,Ultima,assets/img/Ultima/Montiride-La 10x1x10 Tablets.webp
Montiride-LC,Tablet,20x10,174.69,Ultima,assets/img/Ultima/Montirided-LC 20x10 Tablets.webp
Moxilet-400,Tablet,10x1x5,138.60,Ultima,assets/img/Ultima/Moxilet 400 10x1x5 Tablets.webp
Mucoxit-AB,Tablet,10x10,204.18,Ultima,assets/img/Ultima/Mucoxit-Ab 10x10 Tablets.webp
Mylabion-D3 Forte,Tablet,10x1x10,198.50,Ultima,assets/img/Ultima/Mylabion D3 Forte 1x10 Tablets.webp
Mylabion-LC,Tablet,10x1x10,181.50,Ultima,assets/img/Ultima/Mylabion LC 10x1x10 Tablets.webp
Napromax 250,Tablet,10x15,108.28,Ultima,assets/img/Ultima/Napromax 250 10x15 Tablets.webp
Napromax 500,Tablet,10x2x10,97.55,Ultima,assets/img/Ultima/Napromax 500 10x2x10 Tablets.webp
Napromax-D,Tablet,10x10,174.60,Ultima,assets/img/Ultima/Napromax-D 10x10 Tablets.webp
Nausinate,Tablet,10x1x30,190.78,Ultima,assets/img/Ultima/Nausinate 10x1x30 Tablets.webp
Nausinate-Plus,Tablet,10x1x30,238.21,Ultima,assets/img/Ultima/Nausinate-Plus 10x1x30 Tablets.webp
New Montiride-FXA,Tablet,10x1x10,226.30,Ultima,assets/img/Ultima/NEW Montiride FXA Tablets 10X1X10.webp
Nimuvent Cold,Tablet,25x2x10,67.00,Ultima,assets/img/Ultima/Nimuvent-COLD 25x2x10 Tablets.webp
Nimuvent-MD,Tablet,30x10,43.66,Ultima,assets/img/Ultima/Nimuvent-Md 30x10 Tablets.webp
Oftivent-200,Tablet,20x10,96.40,Ultima,assets/img/Ultima/Oftivent-200 20x10 Tablets.webp
Oftivent-OZ,Tablet,20x10,131.00,Ultima,assets/img/Ultima/Oftivent-Oz 20x10 Tablets.webp
Ondilium MD 8,Tablet,20x10,97.44,Ultima,assets/img/Ultima/Ondilium-MD 8 20x10 Tablets.webp
Ondilium-MD,Tablet,20x10,55.23,Ultima,assets/img/Ultima/Ondilium-Md 20x10 Tablets.webp
Oravent,Tablet,20x10,65.87,Ultima,assets/img/Ultima/Oravent 15gm Cream.webp
Pantovent-40,Tablet,20x10,126.70,Ultima,assets/img/Ultima/Pantovent-40 20x10 Tablets.webp
Pantovent-D,Tablet,20x10,138.80,Ultima,assets/img/Ultima/Pantovent-D 20x10 Tablets.webp
Phylobron 200sr,Tablet,20x10,226.87,Ultima,assets/img/Ultima/Phylobron 200Sr 20x10 Tablets.webp
Pregavent-M 1500,Tablet,10x1x10,274.51,Ultima,assets/img/Ultima/Pregavent-M 1500 10x1x10 Tablets.webp
Pregavent-ET,Tablet,20x10,243.75,Ultima,assets/img/Ultima/Pregavent-Et 20x10 Tablets.webp
Pregavent-NT,Tablet,10x1x10,205.88,Ultima,assets/img/Ultima/Pregavent-Nt 10x1x10 Tablets.webp
Pregavent-NTM,Tablet,10x1x10,224.60,Ultima,assets/img/Ultima/Pregavent-Ntm 10x1x10 Tablets.webp
Primovent-CR,Tablet,10x10,191.81,Ultima,assets/img/Ultima/Primovent-Cr 10x10 Tablets.webp
Primovent-N,Tablet,4x5x10,57.96,Ultima,assets/img/Ultima/Primovent-N 4x5x10 Tablets.webp
Proditil-Plus,Tablet,5x1x10,283.50,Ultima,assets/img/Ultima/Proditil-Plus 5x1x10 Tablets.webp
Proditil-100,Tablet,10x1x10,124.70,Ultima,assets/img/Ultima/Proditil-100 30ml Tablets.webp
Proditil-200,Tablet,10x1x10,243.30,Ultima,assets/img/Ultima/Proditil-200 10x1x10 Tablets.webp
Proditil-CV 325,Tablet,10x1x6,284.40,Ultima,assets/img/Ultima/Proditil-CV 325 10x1x6 Tablets.webp
Qtvent-25,Tablet,5x2x10,58.98,Ultima,assets/img/Ultima/Qtvent-25 5x2x10 Tablets.webp
Qtvent-50,Tablet,5x2x10,81.67,Ultima,assets/img/Ultima/Qtvent-50 5x2x10 Tablets.webp
Ranilium Spas,Tablet,20x10,54.45,Ultima,assets/img/Ultima/Ranilium-Spas 20x10 Tablets.webp
Ranilium-D,Tablet,20x10,43.60,Ultima,assets/img/Ultima/Ranilium-D 20x10 Tablets.webp
Ranilium-O,Tablet,20x10,47.41,Ultima,assets/img/Ultima/Ranilium-O 20x10 Tablets.webp
Razodrot-40,Tablet,10x15,113.43,Ultima,assets/img/Ultima/Razodrot-40 10x15 Tablets.webp
Razodrot-DS,Tablet,10x15,215.50,Ultima,assets/img/Ultima/Razodrot-DS 80mg 10x15 Tablets.webp
Razodrot-M,Tablet,20x10,93.58,Ultima,assets/img/Ultima/Razodrot-M 20x10 Tablets.webp
Razospas-TX,Tablet,10x10,260.80,Ultima,assets/img/Ultima/Razospas-TX 10x10 Tablets.webp
Razotran-500,Tablet,10x10,199.29,Ultima,assets/img/Ultima/Razotran 500mg 10x10 Tablets.webp
Rozucard-10,Tablet,3x10,151.60,Ultima,assets/img/Ultima/Rozucard-10 3x10 Tablets.webp
Rozucard-20,Tablet,3x10,272.25,Ultima,assets/img/Ultima/Rozucard-20 3x10 Tablets.webp
Rozucard-F,Tablet,10x1x10,179.23,Ultima,assets/img/Ultima/Rozucard-F 10x1x10 Tablets.webp
RTQS-200,Tablet,10x15,102.53,Ultima,assets/img/Ultima/Rtqs-200 10x15 Tablets.webp
RTQS-Tofa,Tablet,20x10,438.20,Ultima,assets/img/Ultima/RTQS-TOFA 20x10 Tablets.webp
Serravent D,Tablet,6x5x10,96.41,Ultima,assets/img/Ultima/Serravent-D 6x5x10 Tablets.webp
Sinovent-Forte,Tablet,25x2x10,63.60,Ultima,assets/img/Ultima/Sinovent Forte 25x2x10 Tablets.webp
Sinovent,Tablet,30x10,60.90,Ultima,assets/img/Ultima/Sinovent 30x10 Tablets.webp
Sitaglys-D,Tablet,10x1x10,273.28,Ultima,assets/img/Ultima/Sitaglys - D 10x1x10 Tablets.webp
Sitaglys-100,Tablet,4x7,144.35,Ultima,assets/img/Ultima/Sitaglys-100mg 4x7 Tablets.webp
Sitaglys-50,Tablet,4x7,136.10,Ultima,assets/img/Ultima/Sitaglys-50mg 4x7 Tablets.webp
Sitaglys-DM(100-10-1000),Tablet,10x10,225.00,Ultima,assets/img/Ultima/Sitaglys-DM 100-10-1000 10x10 Tablets.webp
Sitaglys-DM(100-10-500),Tablet,10x10,215.62,Ultima,assets/img/Ultima/Sitaglys-DM 100-10-500 10x10 Tablets.webp
Sitaglys-M 50/1000,Tablet,2x15,272.25,Ultima,assets/img/Ultima/Sitaglys-M-50-1000 2x15 Tablets.webp
Sitaglys-M 50/500,Tablet,2x15,249.56,Ultima,assets/img/Ultima/Sitaglys-M-50-500 2x15 Tablets.webp
Telirol-B-2.5,Tablet,10x10,128.00,Ultima,assets/img/Ultima/Telirol-B 2.5 10x10 Tablets.webp
Telirol-B-5,Tablet,10x10,149.00,Ultima,assets/img/Ultima/Telirol-B 5 10x10 Tablets.webp
Telirol-CT 40/12.5,Tablet,10x15,153.14,Ultima,assets/img/Ultima/Telirol-CT 40-12_5 10x15 Tablets.webp
Telirol-TRIO 40,Tablet,10x15,174.69,Ultima,assets/img/Ultima/Telirol Trio 40 10x15 Tablets.webp
Telirol-40,Tablet,20x10,72.66,Ultima,assets/img/Ultima/Telirol-40 20x10 Tablets.webp
Telirol-AM,Tablet,20x10,89.84,Ultima,assets/img/Ultima/Telirol AM Tab  20x10.webp
Telirol-H,Tablet,10x15,136.12,Ultima,assets/img/Ultima/Telirol-H 10x15 Tablets.webp
Tenlivent-20,Tablet,20x10,119.17,Ultima,assets/img/Ultima/Tenlivent-20 20x10 Tablets.webp
Tenlivent-M 1000,Tablet,10x10,141.79,Ultima,assets/img/Ultima/Tenlivent-M 1000 10x10 Tablets.webp
Tenlivent-M 500,Tablet,10x10,143.49,Ultima,assets/img/Ultima/Tenlivent-M 500 10x10 Tablets.webp
Terbiride-250,Tablet,10x1x7,184.50,Ultima,assets/img/Ultima/Terbiride 250gm 10x1x7 Tablets.webp
Terbiride-500,Tablet,10x1x7,249.56,Ultima,assets/img/Ultima/Terbiride 500mg 10x1x7 Tablets.webp
Tizamax-MR,Tablet,10x2x10,165.00,Ultima,assets/img/Ultima/Tizamax-MR 10x2x10 Tablets.webp
Torigesic-Plus,Tablet,20x10,90.75,Ultima,assets/img/Ultima/Torigesic-Plus 20x10 Tablets.webp
Torigesic-120,Tablet,20x10,147.23,Ultima,assets/img/Ultima/Torigesic 120mg 20x10 Tablets.webp
Torigesic-60,Tablet,20x10,92.33,Ultima,assets/img/Ultima/Torigesic 60mg 20x10 Tablets.webp
Torigesic-90,Tablet,20x10,107.76,Ultima,assets/img/Ultima/Torigesic 90mg 20x10 Tablets.webp
Torigesic-TH4,Tablet,10x1x10,243.31,Ultima,assets/img/Ultima/Torigesic TH4 10x1x10 Tablets.webp
Torigesic-TH8,Tablet,10x1x10,391.87,Ultima,assets/img/Ultima/Torigesic TH8 10x1x10 Tablets.webp
Torsevent-10,Tablet,4x5x10,79.41,Ultima,assets/img/Ultima/Torsevent 10mg 4x5x10 Tablets.webp
Torsevent-20,Tablet,4x5x10,136.10,Ultima,assets/img/Ultima/Torsevent 20mg 4x5x10 Tablets.webp
Torsevent-Plus,Tablet,10x15,146.40,Ultima,assets/img/Ultima/Torsevent-Plus 10x15 Tablets.webp
Trizacet,Tablet,40x15,30.24,Ultima,assets/img/Ultima/Trizacet 40x15 Tablets.webp
Trizacet-Cold RF,Tablet,25x10,54.37,Ultima,assets/img/Ultima/Trizacet Cold New pack 25x10 Tablets.webp
Tusston Super-NF,Tablet,20x10,67.03,Ultima,assets/img/Ultima/Tusston Super-NF 20x10 Tablets.webp
Udivent-150,Tablet,10x1x10,227.40,Ultima,assets/img/Ultima/Udivent-150 10x1x10 Tablets.webp
Udivent-300,Tablet,10x1x10,435.60,Ultima,assets/img/Ultima/Udivent-300 Tablet.webp
Utispas,Tablet,10x15,286.87,Ultima,assets/img/Ultima/Utispas 10x15 Tablets.webp
Ventocal-500,Tablet,20x15,89.84,Ultima,assets/img/Ultima/Ventocal-500 20x15 Tablets.webp
Ventocal-XT,Tablet,20x15,278.43,Ultima,assets/img/Ultima/Ventocal XT 20x15 Tablets.webp
Ventocee-Z,Tablet,20x10,73.70,Ultima,assets/img/Ultima/Ventocee-Z 20x10 Tablets.webp
Ventokast-LC Junior,Tablet,10x1x10,81.10,Ultima,assets/img/Ultima/Ventokast-LC Junior 10x1x10 Tablets.webp
Ventokast-LC,Tablet,20x1x10,174.69,Ultima,assets/img/Ultima/Ventokast LC 20x1x10 Tablets.webp
Ventophagus-20,Tablet,10x10,168.00,Ultima,assets/img/Ultima/Ventophagus 20 10x10 Tablets.webp
Ventophylin-400,Tablet,10x1x10,93.00,Ultima,assets/img/Ultima/Ventophylin-400 10x1x10 Tablets.webp
Ventophylin-S,Tablet,10x1x10,90.75,Ultima,assets/img/Ultima/Ventophylin-S 10x1x10 Tablets.webp
Ventophylin-M,Tablet,10x1x10,181.50,Ultima,assets/img/Ultima/Ventophylin-M 10x1x10 Tablets.webp
Ventophylin-XL,Tablet,10x1x10,96.40,Ultima,assets/img/Ultima/Ventophylin XL 10x1x10 Tablets.webp
Ventoran-100 SR,Tablet,30x10,78.60,Ultima,assets/img/Ultima/Ventoran SR  100mg Tablets.webp
Ventoran-A,Tablet,20x10,39.60,Ultima,assets/img/Ultima/Ventoran-A 20x10 Tablets.webp
Ventoran-MR,Tablet,80x10,81.55,Ultima,assets/img/Ultima/Ventoran-Mr 80x10 Tablets.webp
Ventoran-SP,Tablet,20x10,112.50,Ultima,assets/img/Ultima/Ventoran-Sp 20x10 Tablets.webp
Venzolid-600,Tablet,10x1x10,383.56,Ultima,assets/img/Ultima/Venzolid 600mg 10x1x10 Tablets.webp
Voglivent-MG1,Tablet,10x2x15,142.03,Ultima,assets/img/Ultima/Voglivent-MG1 10x2x15 Tablets.webp
Voglivent-MG2,Tablet,10x2x15,238.20,Ultima,assets/img/Ultima/Voglivent-MG2 10x2x15 Tablets.webp
Xiotil-250,Tablet,10x1x10,350.62,Ultima,assets/img/Ultima/Xiotil 250mg 10x1x10 Tablets.webp
Xiotil-500,Tablet,10x1x10,553.00,Ultima,assets/img/Ultima/Xiotil 500mg 10x1x10 Tablets.webp
Xiotil-CV 625,Tablet,10x1x6,510.40,Ultima,assets/img/Ultima/Xiotil-CV 625mg 10x1x6 Tablets.webp
Yuvigra-LA,Tablet,20x1x4,272.25,Ultima,assets/img/Ultima/Yuvigra-La 20x1x4 Tablets.webp
Yuvigra-LA Forte,Tablet,24x1x4,330.00,Ultima,assets/img/Ultima/Yuvigra-LA Forte 24x1x4 Tablets.webp
Zithroset-250,Tablet,20x1x6,75.28,Ultima,assets/img/Ultima/Zithroset - 250mg 10x1x6 Tablets.webp
Zithroset-3 Kit,Tablet,1x4,138.75,Ultima,assets/img/Ultima/Zithroset - 3 Kit Tablets.webp
Zithroset-500,Tablet,20x1x3,76.00,Ultima,assets/img/Ultima/Zithroset -500mg 10x1x3 Tablets.webp
Zyfix 200-LB,Tablet,10x10,167.88,Ultima,assets/img/Ultima/Zyfix-200LB 10x10 Tablets.webp
Acnevent,Softgel,10X1X10,235.12,Ultima,assets/img/Ultima/Acnevent 10x1x10 Softgel Capsules.webp
Arshcure,Capsule,1x30,204.00,Ultima,assets/img/Ultima/Arshcure 1x30 Capsules.webp
Becominta-4G,Softgel,3x10,226.00,Ultima,assets/img/Ultima/Becominta 4g 3x10 Softgel Capsules.webp
Calcivent-K2 Forte,Softgel,10x1x10,176.90,Ultima,assets/img/Ultima/Calcivent K2 Forte 10x1x10 Softgel Capsules.webp
Calcivent,Softgel(Yellow/Red),5x2x15,213.26,Ultima,assets/img/Ultima/Calcivent 5x2x15 Softgel Capsules (YR).webp
Calcivent-D3 Max,Softgel,3X10,402.18,Ultima,assets/img/Ultima/Calcivent-d3 Max 10x1x15 Softgel Capsules.webp
Kneeguard Plus,Softgel,10X1X10,338.13,Ultima,assets/img/Ultima/Kneeguard plus 10x1x10 Softgel Capsules.webp
Livominta-SL,Softgel,10x1x10,190.00,Ultima,assets/img/Ultima/LIVOMINTA-SL 10x1x10 Softgel Capsules.webp
Lycoride,Softgel,10x1x10,142.12,Ultima,assets/img/Ultima/Lycoride 10x1x10 Softgel Capsules.webp
Rejuvital,Softgel,20x1x10,101.60,Ultima,assets/img/Ultima/Rejuvital 20x1x10 Softgel Capsules.webp
Sinovent-DM,Softgel,20X1X10,58.96,Ultima,assets/img/Ultima/Sinovent-Dm 20x1x10 Softgel Capsules.webp
Sofegest 200,Softgel,10x1x10,510.00,Ultima,assets/img/Ultima/Sofegest 200 10x1x10 Softgel Capsules.webp
Ventocal-D3,Softgel,10x1x4,132.38,Ultima,assets/img/Ultima/Ventocal D3 Nano 5ml.webp
Zincominta-Rich,Softgel,10x1x10,124.35,Ultima,assets/img/Ultima/Zincominta Rich 10x1x10 Capsules.webp
Actigrain-P,Capsule,10x10,107.30,Ultima,assets/img/Ultima/Actigrain-P 10x10 Capsules.webp
Apilactin Plus,Syrup,200 ml,131.58,Ultima,assets/img/Ultima/Apilactin Plus 200ml Syrup.webp
Aptiride,Syrup,200 ml,149.53,Ultima,assets/img/Ultima/Aptiride 200ml Syrup.webp
Becominta Z,Syrup,200 ml,149.49,Ultima,assets/img/Ultima/Becominta Z 200ml Syrup.webp
Bilotra DM,Syrup,100ml,144.37,Ultima,assets/img/Ultima/Bilotra Dm 100ml Syrup.webp
Bilotra-M,Suspension,60 ml,193.60,Ultima,assets/img/Ultima/Bilotra-M 60ml Syrup.webp
Carivent,Syrup,200 ml,226.87,Ultima,assets/img/Ultima/Carivent 200ml Syrup.webp
Citrastone,Syrup,100 ml,123.50,Ultima,assets/img/Ultima/Citrastone 100ml Syrup.webp
Colivent,Syrup,60 ml,87.33,Ultima,assets/img/Ultima/Colivent 60ml Syrup.webp
Corivent-EX,Syrup,100 ml,112.50,Ultima,assets/img/Ultima/Corivent-Ex 100ml Syrup.webp
Dilustone 1B6,Solution,200 ml,237.08,Ultima,assets/img/Ultima/Dilustone Syrup 200ml.webp
Donacortil-6,Suspension,30 ml,73.52,Ultima,assets/img/Ultima/Donacortil-6 30ml Syrup.webp
Feriminta Plus,Syrup,225 ml,205.83,Ultima,assets/img/Ultima/Feriminta-PLUS 225ml Syrup.webp
Feriminta Plus,Syrup,450 ml,349.38,Ultima,assets/img/Ultima/Feriminta-PLUS 450ml Syrup.webp
Ferivent-XT,Syrup,150 ml,174.69,Ultima,assets/img/Ultima/Ferivent-Xt 150ml Syrup.webp
Gasfiz Mint Flavour,Suspension,170 ml,122.50,Ultima,assets/img/Ultima/Gasfiz Suspension  170ml.webp
Gasfiz Paan Flavour,Suspension,170 ml,122.50,Ultima,assets/img/Ultima/Gasfiz Suspension Paan 170ml.webp
Gasfiz Raft,Suspension,150 ml,182.80,Ultima,assets/img/Ultima/Gasfiz- RAFT 150 New.webp
Histarex,Syrup,100 ml,136.00,Ultima,assets/img/Ultima/Histarex 100ml Syrup.webp
Honiryl,Syrup,100 ml,98.43,Ultima,assets/img/Ultima/Honiryl 100ml Syrup.webp
Ibuvent-Plus,Suspension,100 ml,124.75,Ultima,assets/img/Ultima/Ibuvent-Plus 100ml Syrup.webp
Ibuvent-Plus,Suspension,60 ml,82.35,Ultima,assets/img/Ultima/Ibuvent-Plus 60ml Syrup.webp
Laxivent,Emulsion,170 ml,159.71,Ultima,assets/img/Ultima/Laxivent Oral Emulsion 170ml.webp
Laxivent-Plus,Emulsion,170 ml,185.90,Ultima,assets/img/Ultima/Laxivent-Plus 170ml Syrup.webp
Levotramine,Syrup,30 ml,48.65,Ultima,assets/img/Ultima/Levotramine-Syrup 30ml.webp
Livominta-Forte,Syrup,200 ml,232.95,Ultima,assets/img/Ultima/Livominta-Forte 200ml Syrup.webp
Lycoride,Syrup,225 ml,262.00,Ultima,assets/img/Ultima/Lycoride 225ml Syrup.webp
Meftadol-P Forte,Syrup,60 ml,106.00,Ultima,assets/img/Ultima/Meftadol-P Forte 60ml Suspension.webp
Meftadol-P,Syrup,60 ml,65.86,Ultima,assets/img/Ultima/Meftadol-P 60ml Syrup.webp
Menstarol,Syrup,200 ml,165.00,Ultima,assets/img/Ultima/Menstarol 200ml Syrup.webp
Mylabion,Syrup,200 ml,170.00,Ultima,assets/img/Ultima/Mylabion Syrup 200 ml.webp
Oftivent,Syrup,60 ml,85.00,Ultima,assets/img/Ultima/Oftivent 60ml Syrup.webp
Oftivent-M,Syrup,30 ml,65.87,Ultima,assets/img/Ultima/Oftivent-M 30ml Syrup.webp
Phylobron-XT,Syrup,100 ml,141.75,Ultima,assets/img/Ultima/Phylobron-Xt 100ml Syrup.webp
Picovent-Laxative,Syrup,100 ml,99.80,Ultima,assets/img/Ultima/Picovent Syrup 100ml.webp
Ranilium-Spas,Syrup,30 ml,77.36,Ultima,assets/img/Ultima/Ranilium Spas Syrup 30ml.webp
Ranilium-MPS,Suspension,170 ml,136.12,Ultima,assets/img/Ultima/Ranilium-Mps 170ml Syrup.webp
Ranilium-PD,Syrup,100 ml,167.60,Ultima,assets/img/Ultima/Ranilium-Pd 100ml Syrup.webp
Sinovent-DM,Syrup,100 ml,112.25,Ultima,assets/img/Ultima/Sinovent-Dm 100ml Syrup.webp
Sinovent-DM,Syrup,60 ml,74.85,Ultima,assets/img/Ultima/Sinovent-Dm 60ml Syrup.webp
Sinovent-DS,Suspension,60 ml,81.00,Ultima,assets/img/Ultima/Sinovent-DS 60ML Syrup.webp
Sinovent,Suspension,60 ml,74.00,Ultima,assets/img/Ultima/Sinovent Syrup 60ml.webp
Spasmovent,Suspension,60 ml,89.00,Ultima,assets/img/Ultima/Spasmovent 60ml Syrup.webp
Trizacet Cold DS RF,Suspension,60 ml,73.68,Ultima,assets/img/Ultima/Trizacet 60ml Syrup.webp
Trizacet Cold RF,Suspension,60ml,61.21,Ultima,assets/img/Ultima/Trizacet Cold DS Suspension.webp
Trizacet,Syrup,60 ml,42.21,Ultima,assets/img/Ultima/Trizacet Syrup 60ml.webp
Tusston Super,Syrup,100 ml,123.50,Ultima,assets/img/Ultima/Tusston-Super 100 ml Syrup.webp
Tusston Super,Syrup,60 ml,81.65,Ultima,assets/img/Ultima/Tusston-Super 60 ml Syrup.webp
Udivent,Suspension,100 ml,320.00,Ultima,assets/img/Ultima/Udivent Suspension 100ml.webp
Ventocal,Suspension,200 ml,126.20,Ultima,assets/img/Ultima/Ventocal Syrup 200ml.webp
Ventokast-LC,Syrup,60 ml,112.50,Ultima,assets/img/Ultima/Ventokast-LC Syrup 60ml.webp
Ventokast-LC,Syrup,30 ml,84.84,Ultima,assets/img/Ultima/Ventokast-LC Syrup 30ml.webp
Ventotus-L,Syrup,100 ml,118.50,Ultima,assets/img/Ultima/Ventotus-L 100ml Syrup.webp
Ventoxol,Syrup,100 ml,119.00,Ultima,assets/img/Ultima/Ventoxol 100ml Syrup.webp
Ventoxol,Syrup,60 ml,79.40,Ultima,assets/img/Ultima/Ventoxol Syrup 60ml.webp
Ventocain Gel,Syrup,170 ml,143.43,Ultima,assets/img/Ultima/Ventocain Liquid Gel 170ml.webp
Ventoxol-L,Syrup,100 ml,108.48,Ultima,assets/img/Ultima/Ventoxol L Syrup 100ml.webp
Ventoxol-L,Syrup,60 ml,72.36,Ultima,assets/img/Ultima/Ventoxol Syrup-L 60ml.webp
Ventoxol-LS Junior,Syrup,100 ml,102.30,Ultima,assets/img/Ultima/Ventoxol-LS Junior Syrup 100ml.webp
Ventoxol-LS Junior,Syrup,60 ml,72.70,Ultima,assets/img/Ultima/Ventoxol-LS Junior Syrup 60ml.webp
Clarivent-125 Oral,Suspension,30 ml,149.94,Ultima,assets/img/Ultima/Clarivent-125 Oral 30ml Syrup.webp
Ultavir,Suspension,30 ml,243.75,Ultima,assets/img/Ultima/Ultavir 30ml Syrup.webp
Zincominta,Syrup,200 ml,153.94,Ultima,assets/img/Ultima/Zincominta Syrup 200ml.webp
Acnevent-Plus,Ointement,15 gm,88.48,Ultima,assets/img/Ultima/Acnevent Plus 15gm Cream.webp
Adigard,Ointement,25 gm,118.53,Ultima,assets/img/Ultima/Adigard 25gm Cream.webp
Betavent-N,Ointement,15 gm,62.90,Ultima,assets/img/Ultima/Betavent-N 15gm Cream.webp
Candivent-VG,Ointement,30 gm,149.50,Ultima,assets/img/Ultima/Candivent-Vg 30gm Cream.webp
Clobevent-GM,Ointement,15 gm,81.09,Ultima,assets/img/Ultima/Clobevent-Gm 15gm Cream.webp
Clobevent-S,Ointement,20 gm,137.25,Ultima,assets/img/Ultima/Clobevent-S 20gm Cream.webp
Gabavent,Ointement,30 gm,260.00,Ultima,assets/img/Ultima/Gabavent 30gm Cream.webp
Healodine,Ointement,15 gm,99.22,Ultima,assets/img/Ultima/Healodine 15g Ointment.webp
Healodine-OZ,Ointement,15 gm,87.79,Ultima,assets/img/Ultima/Healodine-Oz 15gm Cream.webp
Itromax-OC,Ointement,15 gm,129.76,Ultima,assets/img/Ultima/Itromax-OC 15gm Cream.webp
Lulinaz-10,Ointement,10 gm,243.31,Ultima,assets/img/Ultima/Lulinaz 10gm Cream.webp
Lulinaz-20,Ointement,20 gm,294.93,Ultima,assets/img/Ultima/Lulinaz 20gm Cream.webp
Lulinaz-30,Ointement,30 gm,408.37,Ultima,assets/img/Ultima/Lulinaz 30gm Cream.webp
Lulinaz-4D,Ointement,20 gm,165.00,Ultima,assets/img/Ultima/Lulinaz- 4D 20gm Cream.webp
Mupivent,Ointement,15 gm,325.00,Ultima,assets/img/Ultima/Mupivent 15gm Cream.webp
Mupivent,Ointement,5 gm,109.00,Ultima,assets/img/Ultima/Mupivent 5gm Cream.webp
Nodigyl DG,Ointement,20 gm,127.80,Ultima,assets/img/Ultima/Nodigyl Dg 20g Cream.webp
Oftiderm-RF,Ointement,15 gm,88.48,Ultima,assets/img/Ultima/Oftiderm-Rf 15gm Cream.webp
Oravent,Ointement,15 gm,73.73,Ultima,assets/img/Ultima/Oravent gel 25x1x15g Ointment.webp
Oravent Plus,Ointement,5 gm,96.42,Ultima,assets/img/Ultima/Oravent-Plus 5gm Cream.webp
Soravent-6,Ointement,30 gm,134.00,Ultima,assets/img/Ultima/SORAVENT-6 12x30g Ointment.webp
Ventoran-2X,Ointement,30 gm,175.82,Ultima,assets/img/Ultima/Ventoran 2X pain gel 30gm.webp
Ventoran Pain Gel,Ointement,10 gm,40.78,Ultima,assets/img/Ultima/Ventoran 25x1x10g Pain-Gel.webp
Ventoran Pain Gel,Ointement,30 gm,124.78,Ultima,assets/img/Ultima/Ventoran Pain-Gel 30g.webp
Calavent,Lotion,100 ml,204.57,Ultima,assets/img/Ultima/Calavent 100ml Lotion.webp
Candivent-B,Lotion,30 ml,106.05,Ultima,assets/img/Ultima/Candivent B 30ml Lotion.webp
Clobevent-GM,Lotion,25 ml,97.30,Ultima,assets/img/Ultima/Clobevent-GM Lotion 25ml.webp
Lulinaz,Lotion,30 ml,237.00,Ultima,assets/img/Ultima/Lulinaz 30ml Lotion.webp
Ventoscab,Lotion,100 ml,116.53,Ultima,assets/img/Ultima/Ventoscab 100ml Lotion.webp
Buderon F,Respules,4x5x2 ml,260.00,Ultima,assets/img/Ultima/Buderon-F Respules 4x5x2ml.webp
Buderon,Respules,4x5x2 ml,127.95,Ultima,assets/img/Ultima/Buderon 4x5x2ml Suspension.webp
Buderon-1mg,Respules,1mgx2ml,141.30,Ultima,assets/img/Ultima/Buderon 1Mg 2ml Respules.webp
Duosma-3,Respules,10x5x3 ml,117.15,Ultima,assets/img/Ultima/Duosma-3 10x5x3ml Respules.webp
Duosma-LD,Respules,10x5x2.5 ml,91.40,Ultima,assets/img/Ultima/Duosma-Ld 10x5x2.5ml Respules.webp
Enterobioz,Respules,15gm,47.40,Ultima,assets/img/Ultima/Enterobioz 5ml Respules.webp
Glycolium,Respules,10x5x2 ml,245.00,Ultima,assets/img/Ultima/Glycolium 10x5x2ml Respules.webp
Levobuta 0.63,Respules,10x5x2.5 ml,84.35,Ultima,assets/img/Ultima/Levobuta 0.63 10x5x2.5ml Respules.webp
Ayu Laxivent,Tablet,15gm,67.00,Ultima,assets/img/Ultima/Ayu Laxivent 10x10 Tablets.webp
Candivent Dusting,Powder,75 gm,118.53,Ultima,assets/img/Ultima/Candivent Powder 75g.webp
Coligut-L,Sachet,50x1g,24.37,Ultima,assets/img/Ultima/Coligut L 50x1g Sachet.webp
Flutigra-AZ,Nasal Spray,7ml,479.61,Ultima,assets/img/Ultima/Flutigra-AZ nasal spary 7ml.webp
Flutigra,Nasal Spray,120m,474.72,Ultima,assets/img/Ultima/Flutigra 120m Spray.webp
Healodine 10%,Solution,100 ml,107.50,Ultima,assets/img/Ultima/healodine-solution-100ml-10percent.webp
Healodine,Solution,100 ml,198.50,Ultima,assets/img/Ultima/Healodine 100ml Gargles.webp
Healodine,Powder,10 gm,73.12,Ultima,assets/img/Ultima/Healodine Powder 10g.webp
Ketojet-CT,Soap,75 gm,129.00,Ultima,assets/img/Ultima/Ketojet-CT 75g Soap.webp
Ketojet,Shampoo,110 ml,204.18,Ultima,assets/img/Ultima/Ketojet Shampoo 110ml.webp
Kneeguard,Sachet,10x5g,130.00,Ultima,assets/img/Ultima/Kneeguard Sachet 10x5g.webp
Laxivent,Powder,4x5x10,170.15,Ultima,assets/img/Ultima/Laxivent 4x5x10 Tablets.webp
Protiminta,Powder(American Ice Cream),200 gm,376.84,Ultima,assets/img/Ultima/Protiminta Amarican Icecream.webp
Protiminta,Powder(Chocolate),200 gm,376.84,Ultima,assets/img/Ultima/Protiminta 200gm Powder.webp
Protiminta,Powder(Kesar-pista),200 gm,376.84,Ultima,assets/img/Ultima/Protiminta Kesar Pista.webp
Protiminta DHA,Powder(Chocolate),200 gm,392.99,Ultima,assets/img/Ultima/Protiminta Dha 200gm Powder.webp
Scabitick-Vet,Soap,75 gm,150.70,Ultima,assets/img/Ultima/Scabitick-Vet 75gm Soap.webp
Sensovent,Mouthwash,100 ml,108.28,Ultima,assets/img/Ultima/Sensovent 100ml Mouthwash.webp
Sensovent,Toothpaste,80 gm,129.00,Ultima,assets/img/Ultima/Sensovent Toothpaste 80g.webp
Sensovent-F,Toothpaste,80 gm,129.20,Ultima,assets/img/Ultima/Sensovent-F 80gm Toothpaste.webp
Sinovent,Nasal Spray,10ml,55.00,Ultima,assets/img/Ultima/Sinovent spray 10ml.webp
Sinovent Saline,Nasal Spray,20ml,68.00,Ultima,assets/img/Ultima/Sinovent-Saline Nasal Spray 20ml.webp
Tusston,Lozenges,35x10,37.50,Ultima,assets/img/Ultima/Tusston Cough 35x10 Lozenges Plastic Box.webp
Ventocal-D3,Nano Shot,5ml,82.30,Ultima,assets/img/Ultima/Ventocal D3 Nano 5ml.webp
Ventoran 2X,Pain Spray,75gm,268.00,Ultima,assets/img/Ultima/Ventoran-2x Spray 75gm.webp
Ventoran 2X,Pain Spray,35gm,82.30,Ultima,assets/img/Ultima/Ventoran-2x Spray 35gm.webp
Ventoran Pain,Pain Oil,50ml,134.00,Ultima,assets/img/Ultima/Ventoran-Pain Oil 50ml.webp
Ventoscab-P,Soap,75g,107.66,Ultima,assets/img/Ultima/Ventoscab-P Soap.webp
Viturna,V-wash,100ml,187.00,Ultima,assets/img/Ultima/Viturna 100ml V-Wash.webp
Accuzith-250,Tablet,20x6,75.28,Optima,assets/img/Ultima/Accuzith-250 20x6 Tablets.webp
Accuzith-500,Tablet,30x3,76.00,Optima,assets/img/Ultima/Accuzith-500 30x3 Tablets.webp
Accuzith-500 XL,Tablet,10x5,126.73,Optima,assets/img/Ultima/Accuzith-500 XL 10x5 Tablets.webp
Auxtocef-250,Tablet,10x1x10,350.62,Optima,assets/img/Ultima/Auxtocef-250 10x1x10 Tablets.webp
Auxtocef-500,Tablet,10x1x10,549.46,Optima,assets/img/Ultima/Auxtocef-500 10x1x10 Tablets.webp
Bactofix-200 DT,Tablet,20x10,105.10,Optima,assets/img/Ultima/Bactofix-200dt 20x10 Tablets.webp
Bactofix-O,Tablet,20x10,224.50,Optima,assets/img/Ultima/Bactofix-O 20x10 Tablets.webp
Bactofix-XL,Tablet,10x1x10,237.00,Optima,assets/img/Ultima/Bactofix-Xl 10x1x10 Tablets.webp
Bactopraz-S 1.5g,Injection,20ml,474.00,Optima,assets/img/Ultima/Bactopraz S 1.5g 20ml Injection.webp
Bactospan-250,Tablet,20x10,23.62,Optima,assets/img/Ultima/Bactospan-250 20x10 Tablets.webp
Bactospan-500,Tablet,20x10,45.67,Optima,assets/img/Ultima/Bactospan-500 20x10 Tablets.webp
Becominta-12,Injection,24x3,30.93,Optima,assets/img/Ultima/Becominta-12 24x3 Injection.webp
Burnolium,Ointement,20gm,134.00,Optima,assets/img/Ultima/Burnolium 20gm Cream.webp
Bactofix-100,Dry Syrup,30ml,77.17,Ultima,assets/img/Ultima/Bactofix-100 30ml Dry Syrup.webp
Bactofix 10ml,Drop,10ml,80.48,Ultima,assets/img/Ultima/Bactofix 10ml Drop.webp
Bactofix-50,Dry Syrup,30ml,52.60,Ultima,assets/img/Ultima/Bactofix-50 30ml Dry Syrup.webp
Becominta-L 60ml,Dry Syrup,60ml,77.34,Ultima,assets/img/Ultima/Becominta-L 60ml Dry Syrup.webp
Cefpovent-100,Tablet,20x10,124.77,Optima,assets/img/Ultima/Cefpovent-100 20x10 Tablets.webp
Cefpovent-100,Dry Syrup,30ml,180.92,Optima,assets/img/Ultima/Cefpovent-100 30ml Dry Syrup.webp
Cefpovent-200,Tablet,10x10,243.30,Optima,assets/img/Ultima/Cefpovent-200 10x10 Tablets.webp
Cefpovent-50,Dry Syrup,30ml,108.56,Optima,assets/img/Ultima/Cefpovent-50 30ml Dry Syrup.webp
Ceftirol-250,Injection,7.5ml,30.47,Optima,assets/img/Ultima/Ceftirol 250 7.5ml Injection.webp
Ceftirol-500,Injection,7.5ml,54.06,Optima,assets/img/Ultima/Ceftirol 500 7.5ml Injection.webp
Ceftirol-S-1.5,Injection,20ml,234.00,Optima,assets/img/Ultima/Ceftirol S-1.5 20ml Injection.webp
Ceftirol-S-375,Injection,10ml,68.60,Optima,assets/img/Ultima/Ceftirol S-375 10ml Injection.webp
Ceftirol-S-750,Injection,10ml,102.30,Optima,assets/img/Ultima/Ceftirol S-750 10ml Injection.webp
Ceftirol-1g,Injection,10ml,67.07,Optima,assets/img/Ultima/Ceftirol-1g 10ml Injection.webp
Ceftirol-T 1.125,Injection,20ml,230.80,Optima,assets/img/Ultima/Ceftirol-t 1.125 20ml Injection.webp
Ceftirol-T 281.25mg,Injection,20ml,78.00,Optima,assets/img/Ultima/Ceftirol-T 281.25mg Injection.webp
Ceftirol-T 562.5mg,Injection,20ml,130.00,Optima,assets/img/Ultima/Ceftirol-T 562.5mg Injection.webp
Cetrovent-10,Tablet,20x7x10,20.16,Optima,assets/img/Ultima/Cetrovent-10 20x7x10 Tablets.webp
Cortidron-100,Injection,5ml,48.16,Optima,assets/img/Ultima/Cortidron 100mg injection.webp
Decacortil-6,Tablet,20x10,123.52,Optima,assets/img/Ultima/Decacortil-6 20x10 Tablets.webp
Dermovent-FP,Tablet,10x2x10,88.69,Optima,assets/img/Ultima/Dermovent-FP 10x2x10 Tablets.webp
Doloride-P,Tablet,10x2x15,100.38,Optima,assets/img/Ultima/Doloride-P 10x2x15 Tablets.webp
Doloride-P,Tablet,10x2x10,73.60,Optima,assets/img/Ultima/Doloride-P 10x2x10 Tablets.webp
Doloride-SP,Tablet,20x10,134.00,Optima,assets/img/Ultima/Doloride-Sp 20x10 Tablets.webp
Dydrobenz-10,Tablet,10x1x10,529.68,Optima,assets/img/Ultima/DydroBenz-10x1x10 Tablets.webp
Farogard,Syrup,30ml,319.68,Optima,assets/img/Ultima/Farogard 30ml Syrup.webp
Farogard-200,Tablet,10x1x10,979.68,Optima,assets/img/Ultima/FAROGARD-200 10x1x10 Tablet.webp
Farogard-300,Tablet,10x1x10,1335.93,Optima,assets/img/Ultima/Farogard-300 10x1x10 Tablets.webp
Fepadol-Kid,Drop,15ml,34.10,Optima,assets/img/Ultima/Fepadol-Kid Drops 15ml.webp
Fepadol-250,Syrup,60ml,42.83,Optima,assets/img/Ultima/Fepadol-250 60ml Syrup.webp
Fepadol-500,Tablet,50x10,9.76,Optima,assets/img/Ultima/Fepadol-500 50x10 Tablets.webp
Fepadol-650,Tablet,10x2x15,32.28,Optima,assets/img/Ultima/Fepadol-650 10x2x15 Tablets.webp
Ferivent,Injection,5ml,308.64,Optima,assets/img/Ultima/Ferivent 5ml Injection.webp
Healodine 5%,Solution,500ml,236.25,Optima,assets/img/Ultima/Healodine Solution 500ml.webp
Lacturol,Syrup,100ml,132.30,Optima,assets/img/Ultima/Lacturol 100ml Syrup.webp
Lacturol,Syrup,170ml,224.91,Optima,assets/img/Ultima/Lacturol 170ml Syrup.webp
Livominta,Syrup,200ml,121.68,Optima,assets/img/Ultima/Livominta 200ml Syrup.webp
Lizubiotic-600,Tablet,10x1x10,381.00,Optima,assets/img/Ultima/LIZUBIOTIC 600 10x1x10 Tablets.webp
Lodicaine,Ointement,30gm,34.96,Optima,assets/img/Ultima/Lodicaine 30gm Cream.webp
Meroride-1000,Injection,20ml,1024.40,Optima,assets/img/Ultima/Meroride 1000 INJECTION.webp
Methocort,Injection,2ml,98.19,Optima,assets/img/Ultima/Methocort 2ml Injection.webp
Methocort 40,Injection,40mg,49.09,Optima,assets/img/Ultima/Methocort 40 40mg Injection.webp
Mikarol-500,Injection,2ml,115.70,Optima,assets/img/Ultima/Mikarol-500 40x2ml Injection.webp
Mylabion-1500,Injection,10x5x2ml,70.33,Optima,assets/img/Ultima/Mylabion-1500 10x5x2ml Injection.webp
Mylabion-Plus,Injection,2ml,77.34,Optima,assets/img/Ultima/Mylabion-Plus 2ml Injection.webp
Necadec-50,Injection,1ml,319.68,Optima,assets/img/Ultima/Necadec-50 1ml Injection.webp
Nimuvent-P,Tablet,25x2x10,57.39,Optima,assets/img/Ultima/Nimuvent-P 25x2x10 Tablets.webp
Nimuvent-P (Gold),Tablet,10x2x10,57.39,Optima,assets/img/Ultima/Nimuvent-P 10x2x10 Tablets.webp
Nimuvent-P (Gold),Tablet,30x2x10,57.39,Optima,assets/img/Ultima/Nimuvent-P 30x2x10 Tablets.webp
Nodigyl 400,Tablet,10x2x15,24.57,Optima,assets/img/Ultima/Nodigyl-400 10x2x15 Tablets.webp
Oftirol-OH,Tablet,20x10,120.00,Optima,assets/img/Ultima/Oftirol-OH Tablets 20x10.webp
Oftirol-200,Tablet,20x10,106.05,Optima,assets/img/Ultima/Oftirol-200 20x10 Tablets.webp
Oftirol-200,Tablet,30x10,123.75,Optima,assets/img/Ultima/Oftirol-200 30x10 Tablets.webp
Omiup,Capsule,20x20,61.74,Optima,assets/img/Ultima/Omiup 20x20 Capsules.webp
Omiup-D,Capsule,20x20,164.34,Optima,assets/img/Ultima/Omiup-D 20x20 Capsules.webp
Ondilium,Injection,2ml,12.81,Optima,assets/img/Ultima/Ondilium 2ml Injection.webp
Pantoraz-DSR,Capsule,20x10,141.70,Optima,assets/img/Ultima/Pantoraz DSR 20x10 Capsules.webp
Pantovent,Injection,10ml,54.24,Optima,assets/img/Ultima/Pantovent 10ml Injection.webp
Piptavent-4.5,Injection,20ml,429.45,Optima,assets/img/Ultima/Piptavent 4-5g Injection.webp
Rabiup-DSR,Capsule,20x10,147.45,Optima,assets/img/Ultima/Rabiup-Dsr 20x10 Capsules.webp
Ranilium,Injection,10x5x2ml,16.87,Optima,assets/img/Ultima/Ranilium 50mg 10x5x2 Injection.webp
Ranilium-150,Tablet,20x30,85.05,Optima,assets/img/Ultima/Ranilium-150 20x30 Tablets.webp
Ranilium-300,Tablet,20x10,46.40,Optima,assets/img/Ultima/Ranilium 300mg 20x10 Tablets.webp
Roxifit-150,Tablet,20x10,102.00,Optima,assets/img/Ultima/Roxifit-150 20x10 Tablets.webp
RTRIT,Injection,5ml,263.14,Optima,assets/img/Ultima/Rtrit 5ml Injection.webp
Spasmovent,Tablet,6x5x10,58.95,Optima,assets/img/Ultima/Spasmovent 6x5x10 Tablets.webp
Sporivent-125,Tablet,20x10,58.98,Optima,assets/img/Ultima/Sporivent-125 20x10 Tablets.webp
Sporivent-250,Capsule,20x10,77.15,Optima,assets/img/Ultima/Sporivent-250 20x10 Capsules.webp
Sporivent-250,Tablet,20x10,137.25,Optima,assets/img/Ultima/Sporivent-250 20x10 Tablets.webp
Sporivent-500,Capsule,20x10,162.93,Optima,assets/img/Ultima/Sporivent-500 20x10 Capsules.webp
Tusston-DX,Syrup,100ml,128.49,Optima,assets/img/Ultima/Tusston DX Syrup 100ml.webp
Tusston-L,Syrup,100ml,154.68,Optima,assets/img/Ultima/Tusston-L 100ml Syrup.webp
Utiquin-400,Tablet,20x10,60.51,Optima,assets/img/Ultima/Utiquin-400 20x10 Tablets.webp
Utiquin-HTZ,Tablet,10x4x10,99.80,Optima,assets/img/Ultima/Utiquin-H TZ 10x4x10 Tablets.webp
Utiquin-TZ,Tablet,10x4x10,109.80,Optima,assets/img/Ultima/Utiquin-TZ 10x4x10 Tablets.webp
Ventimox-250,Suspension,60ml,100.80,Optima,assets/img/Ultima/Ventimox-250 Dry Syrup 60ml.webp
Ventimox-125,Suspension,60ml,66.15,Optima,assets/img/Ultima/Ventimox-125 Dry Syrup  60ml.webp
Ventimox Plus Kid,Tablet,20x10,47.40,Optima,assets/img/Ultima/Ventimox Plus KID 20x10 Tablets.webp
Ventimox Plus LB (Blue/Grey),Capsule,10x2x10,96.37,Optima,assets/img/Ultima/VENTIMOX PLUS LB (Blue-Grey) 10x2x10 Capsule.webp
Ventimox Plus LB (Sky Blue/White),Capsule,10x2x10,96.37,Optima,assets/img/Ultima/Ventimox PLUS-LB 10x2x10 Capsule.webp
Ventimox-125 DT,Tablet,20x10,55.00,Optima,assets/img/Ultima/Ventimox-125 DT 20x10 Tablets.webp
Ventimox-250,Capsule(Red/white),10x3x10,26.25,Optima,assets/img/Ultima/Ventimox-250mg 10x3x10 Capsules (red white).webp
Ventimox-250,Capsule(Yellow/Grey),10x3x10,26.25,Optima,assets/img/Ultima/Ventimox-250mg 10x3x10 Capsules (Yellow Grey).webp
Ventimox-250 DT,Tablet,20x10,126.56,Optima,assets/img/Ultima/Ventimox-250 DT 20x10 Tablets.webp
Ventimox-500,Capsule(Orange/Orange),10x2x10,79.17,Optima,assets/img/Ultima/Ventimox-500 10x2x10 Capsules ORANGE.webp
Ventimox-500,Capsule(Yellow-Yellow),10x2x10,79.17,Optima,assets/img/Ultima/Ventimox-500 10x2x10 Capsules Yellow.webp
Ventimox-CV,Drop,10ml,99.82,Optima,assets/img/Ultima/Ventimox CV 2.2gm 10ml Drops.webp
Ventimox-CV 1.2 GM,Injection,20ml,152.31,Optima,assets/img/Ultima/Ventimox 60ml Dry Syrup.webp
Ventimox-CV 228.5,Dry Syrup,30ml,65.20,Optima,assets/img/Ultima/Ventimox- CV 228.5 Dry Syrup 30ML.webp
Ventimox-CV 228.5,Tablet,10x1x10,195.93,Optima,assets/img/Ultima/Ventimox-CV 228-5 10x1x10 Tablets.webp
Ventimox-CV 375,Tablet,10x1x10,218.90,Optima,assets/img/Ultima/Ventimox-CV 375 10x1x6 Tablets.webp
Ventimox-CV 457,Dry Syrup,30ml,139.68,Optima,assets/img/Ultima/Ventimox CV 457 Dry Syrup 30ml.webp
Ventimox-CV 457,Tablet,10x1x10,337.50,Optima,assets/img/Ultima/Ventimox-CV 457 10x1x10 Tablets.webp
Ventimox-CV 625,Tablet,10x2x10,196.77,Optima,assets/img/Ultima/Ventimox-CV 625 10x2x10 Tablets.webp
Ventimox-CV 625,Tablet,20x6,118.06,Optima,assets/img/Ultima/Ventimox-CV 625 20x6 Tablets.webp
Ventocold,Tablet,30x10,54.40,Optima,assets/img/Ultima/Ventocold 30x10 Tablets.webp
Ventocold-DM,Dry Syrup,100ml,118.53,Optima,assets/img/Ultima/Ventocold DM Syrup 100ml.webp
Ventocold-DM Junior,Syrup,60ml,66.10,Optima,assets/img/Ultima/Ventocold DM Junior Syrup 60ml.webp
Ventocold-RF,Tablet,6x5x10,59.80,Optima,assets/img/Ultima/Ventocold RF 6x5x10 Tablets.webp
Ventocort,Injection,1ml,140.62,Optima,assets/img/Ultima/Ventocort 1ml Injection.webp
Ventocortil-10,Tablet,10x5x10,12.91,Optima,assets/img/Ultima/Ventocortil 10mg 10x5x10 Tablets.webp
Ventocortil-20,Tablet,20x10,25.83,Optima,assets/img/Ultima/Ventocortil 20mg 20x10 Tablets.webp
Ventocortil-5,Tablet,10x5x10,7.24,Optima,assets/img/Ultima/Ventocortil 5mg 10x5x10 Tablets.webp
Ventolyte-ORS,Ors,21.8gm,23.34,Optima,assets/img/Ultima/ORS 50 Sachets.webp
Ventoran,Injection,10x5x1,27.94,Optima,assets/img/Ultima/Ventoran 10x5x1 Injection.webp
Ventoran-P,Tablet,30x10,44.90,Optima,assets/img/Ultima/Ventoran-P 30x10 Tablets.webp
Ventoran-P,Tablet(Clear Pvc),10x2x10,44.91,Optima,assets/img/Ultima/Ventoran-P 10x2x10 Tablets White PVC.webp
Wormiband Plus,Tablet,10x10x1,22.40,Optima,assets/img/Ultima/Wormiband PLUS 10x10x1 Tablets.webp
Wormiband-400,Tablet,10x10x1,8.73,Optima,assets/img/Ultima/Wormiband 400 10x10x1 Tablets.webp
Acevia,Capsule,10x10,0.00,Innoventis,assets/img/Innoventis/Acevia 10x10 Capsules.webp
Aculinctus,Syrup,100ml,112.40,Innoventis,assets/img/Innoventis/Aculinctus syrup 100 ml.webp
Allybenz-5,Tablet,10x10,181.50,Innoventis,assets/img/Innoventis/Allybenz-5 Tablets.webp
Azibenz 100 XL,Suspension,30ml,97.96,Innoventis,assets/img/Innoventis/Azibenz 100 XL Susp.webp
Azibenz 200 XL,Suspension,30ml,109.93,Innoventis,assets/img/Innoventis/Azibenz 200 XL Susp 30ml.webp
Azibenz 250mg,Tablet,20x1x6,75.28,Innoventis,assets/img/Innoventis/Azibenz 250mg Tablets.webp
Azibenz 500mg,Tablet,20x1x3,76.00,Innoventis,assets/img/Innoventis/Azibenz 500 mg Tablets.webp
Becolium-5G,Softgel Capsules,10x1x10,234.91,Innoventis,assets/img/Innoventis/Becolium 5G Softgel Capsules.webp
Becolium,Capsule,20x20,80.43,Innoventis,assets/img/Innoventis/Becolium Capsules.webp
Becolium-L,Capsule,20x10,56.71,Innoventis,assets/img/Innoventis/Becolium-L Cap.webp
Bestorange,Syrup,200ml,183.70,Innoventis,assets/img/Innoventis/Bestorange 200ml.webp
Betadron 1mg,Injection,10x5x1ml,5.00,Innoventis,assets/img/Innoventis/Betadron 1mg Injection.webp
Betadron,Tablet,25x20,16.87,Innoventis,assets/img/Innoventis/Betadron 25x20 Tablets.webp
Bilanoa-20,Tablet,10x1x10,0.00,Innoventis,assets/img/Innoventis/Bilanoa 20 10x1x10 Tablets.webp
Broncolium-DM,Syrup,100ml,130.45,Innoventis,assets/img/Innoventis/Broncolium-DM Syrup 100ml.jpg
Broncolium-LS Junior,Syrup,60ml,79.35,Innoventis,assets/img/Innoventis/Broncolium-LS Junior 60ml.jpg
Broncolium-LS,Syrup,100ml,120.24,Innoventis,assets/img/Innoventis/Broncolium-LS Syrup 100ml.jpg
Broncolium,Syrup,100ml,124.78,Innoventis,assets/img/Innoventis/Broncolium-Syrup 100ml.jpg
Budilium 0.5mg,Respules,10x5x2ml,127.95,Innoventis,assets/img/Innoventis/Budilium 0.5mg Respules.webp
Burnogard,Ointement,20gm,134.06,Innoventis,assets/img/Innoventis/Burnogard Cream 20GM.webp
Calcilium-K2-7,Softgel,10x1x10,307.31,Innoventis,assets/img/Innoventis/Calcilium K2-7 10x1x10 Softgel Capsules.webp
CALCILIUM-500,Tablet,20x15,0.00,Innoventis,assets/img/Innoventis/Calcilium-500 20x15 Tablets.webp
Calcilium-D3 Max,Softgel,10x1x10,465.00,Innoventis,assets/img/Innoventis/Calcilium-D3 Max 10x1x10 Softgel Capsules.webp
Canfu Cream 15gm,Ointement,15gm,48.35,Innoventis,assets/img/Innoventis/Canfu Cream 15gm.webp
Canfu Dusting,Powder,75g,118.53,Innoventis,assets/img/Innoventis/Canfu Dusting powder 3D.webp
Canfu,Ear Drop,5ml,99.80,Innoventis,assets/img/Innoventis/Canfu Ear Drops 5ml.webp
Canfu-BN,Ointement,15gm,80.40,Innoventis,assets/img/Innoventis/Canfu-BN Cream 15gm.webp
Canfu-L,Cream,30g,371.25,Innoventis,assets/img/Innoventis/Canfu-L Cream 30g.jpg
Canfu Ultra,Ointement,15gm,123.75,Innoventis,assets/img/Innoventis/Canfu-ULTRA 15gm Ointment.webp
Canfu-VT6,Tablet,10x1x6,0.00,Innoventis,assets/img/Innoventis/Canfu-VT6 10x1x6 Tablets.webp
Carilium,Tablet,10x1x15,510.00,Innoventis,assets/img/Innoventis/Carilium Tablets 10x1x15.jpg
Cartirol,Sachet,15g,167.73,Innoventis,assets/img/Innoventis/Cartirol Sachet 15g.webp
Cartirol,Tablet,10x1x10,435.57,Innoventis,assets/img/Innoventis/Cartirol Tablets.webp
Cefabenz-500,Tablet,10x1x10,553.00,Innoventis,assets/img/Innoventis/Cefabenz 500 10x1x10 tablets.webp
Cefilium-100,Tablet,20x10,185.62,Innoventis,assets/img/Innoventis/Cefilium 100mg Tablets.webp
Cefilium-100,Dry Syrup,30ml,77.17,Innoventis,assets/img/Innoventis/Cefilium 100 Dry Syrup.webp
Cefilium-200,Tablet,20x10,105.10,Innoventis,assets/img/Innoventis/Cefilium 200mg Tablets.webp
Cefilium-OF,Tablet,20x10,105.10,Innoventis,assets/img/Innoventis/Cefilium-OF 20x10 Tablets.webp
Cefilium-OF,Dry Syrup,30ml,77.17,Innoventis,assets/img/Innoventis/Cefilium OF Dry Syrup 30ml.webp
Cefilium 50,Dry Syrup,30ml,104.15,Innoventis,assets/img/Innoventis/Cefilium 50 Dry Syrup.webp
Cefilium,Drop,10ml,79.35,Innoventis,assets/img/Innoventis/Cefilium Drop 10ml.webp
Cetrolium,Tablet,20x8x10,20.16,Innoventis,assets/img/Innoventis/Cetrolium 10mg 20x4x15 Tablets.webp
Cinadron,Tablet,4x5x10,67.00,Innoventis,assets/img/Innoventis/Cinadron 20mg 4x5x10 Tablets.webp
Cinadron-D,Tablet,20x10,111.15,Innoventis,assets/img/Innoventis/Cinadron D 20x10 Tablets.webp
Cinadron Plus,Tablet,10x10,130.00,Innoventis,assets/img/Innoventis/Cinadron Plus Tablets 10x10.webp
Ciprovent,Injection,100ml,61.87,Innoventis,assets/img/Innoventis/Ciprovent 100ML Infusion.webp
Ciprovent-500mg,Tablet,10x2x15,45.67,Innoventis,assets/img/Innoventis/Ciprovent-500mg 10x2x10 Tablets.webp
Clobegard-GM,Cream,10gm,21.00,Innoventis,assets/img/Innoventis/Clobegard-GM 10gm.webp
Clobegard-GM,Cream,20gm,92.81,Innoventis,assets/img/Innoventis/Clobegard-GM 20gm.webp
Cyprolium,Tablet,20x10,43.30,Innoventis,assets/img/Innoventis/Cyprolium 4mg 20x10 Tablets.webp
D-Jump,Nano Shot,4x5ml,80.43,Innoventis,assets/img/Innoventis/D-Jump Nano Shots.webp
Debirol-GM2,Tablet,10x1x10,109.59,Innoventis,assets/img/Innoventis/Debirol-GM2 10x1x10 Tablets.webp
Defladron-12,Tablet,20x10,224.25,Innoventis,assets/img/Innoventis/Defladron-12 Tablets 20x10.webp
Defladron-6,Tablet,20x10,152.60,Innoventis,assets/img/Innoventis/Defladron-6 Tablets.webp
Deslobenz-5,Tablet,10x10,105.15,Innoventis,assets/img/Innoventis/Deslobenz-5mg 10x10 Tablets.webp
Dolanta-1ml,Injection,10x5x1ml,33.00,Innoventis,assets/img/Innoventis/Dolanta 1ml Injection.webp
Dolanta-3ml,Injection,10x5x3ml,5.45,Innoventis,assets/img/Innoventis/Dolanta Injection 3ml.webp
Dolanta Hot Gel,Ointement,30g,113.43,Innoventis,assets/img/Innoventis/Dolanta Hot Gel.jpg
Dolanta Pain Gel,Ointement,30g,128.85,Innoventis,assets/img/Innoventis/Dolanta pain Gel 30gm.jpg
Dolanta-SP,Tablet,20x10,111.37,Innoventis,assets/img/Innoventis/Dolanta SP Tablets.webp
Dolanta-SPAS,Injection,10x5x1ml,28.35,Innoventis,assets/img/Innoventis/Dolanta SPAS 1ml ampule.webp
Dolanta-MR,Tablet,20x10,92.75,Innoventis,assets/img/Innoventis/Dolanta-MR Tablets.webp
Dolanta-P,Tablet,10x2x10,77.10,Innoventis,assets/img/Innoventis/Dolanta-P Tablets.webp
Doxilast-AX,Capsule,20x10,86.60,Innoventis,assets/img/Innoventis/Doxilast-Ax Capsules 20x10.webp
Doxilast-LB,Capsules,20x10,86.62,Innoventis,assets/img/Innoventis/Doxilast-LB Tablets.webp
Duloquit-20,Capsule,20x10,0.00,Innoventis,assets/img/Innoventis/Duloquit-20 Capsules 20x10.webp
Duolium-3,Respules,10x5x3ml,117.15,Innoventis,assets/img/Innoventis/Duolium-3 Respules 10x5x3ml.webp
Enterolium,Suspension,20x10x5ml,67.00,Innoventis,assets/img/Innoventis/Enterolium Suspension.webp
Exoffin-Plus,Suspension,170ml,0.00,Innoventis,assets/img/Innoventis/Exoffin-Plus 170ml Suspension.webp
Fastodine,Ointement,15gm,80.43,Innoventis,assets/img/Innoventis/Fastodine 15 gm.webp
Fastodine,Solution,100ml,47.25,Innoventis,assets/img/Innoventis/Fastodine Solution 100ml.webp
Fastodine,Solution,500ml,236.25,Innoventis,assets/img/Innoventis/Fastodine Solution 500ml.webp
Fastodine-M,Ointement,15gm,113.43,Innoventis,assets/img/Innoventis/Fastodine-M Ointment 15gm.webp
Fastodine-OZ,Ointment,15gm,80.43,Innoventis,assets/img/Innoventis/Fastodine-OZ 15gm.webp
Feromont,Injection,5x1x5ml,308.64,Innoventis,assets/img/Innoventis/Feromont Injection.webp
Feromont-XT,Tablet,5x3x10,158.81,Innoventis,assets/img/Innoventis/Feromont-XT 5x3x10 Tablets.jpg
Frutilium,Syrup,200ml,323.00,Innoventis,assets/img/Innoventis/Frutilium 200ml Syrup.webp
Fungiride-5NF,Cream,15gm,106.00,Innoventis,assets/img/Innoventis/Fungiride-5 Cream 15gm.webp
Gababenz-NT 100,Tablet,10x15,127.85,Innoventis,assets/img/Innoventis/Gababenz-NT 100 Tablets.webp
Gababenz-NT 400,Tablet,20x10,292.87,Innoventis,assets/img/Innoventis/Gababenz-NT 400 Tablets.webp
Gutcore,Capsule,10x1x10,158.00,Innoventis,assets/img/Innoventis/Gutcore 10x1x10 Capsules.webp
Healozyme-A,Tablet,10x10,243.80,Innoventis,assets/img/Innoventis/Healozyme-A Tablets.webp
Healozyme-D,Tablet,10x10,243.80,Innoventis,assets/img/Innoventis/Healozyme-D Tablets.webp
Ibubenz-PLUS,Suspension,60ml,74.86,Innoventis,assets/img/Innoventis/Ibubenz-PLUS Suspension 60ml.jpg
Innocortil-10,Tablet,50x10,12.91,Innoventis,assets/img/Innoventis/Innocortil-10 50x10 Tablets.webp
Innocortil-5,Tablet,50x10,7.24,Innoventis,assets/img/Innoventis/Innocortil-5 50x10 Tablets.webp
Innoxone 1g,Injection,1g,67.07,Innoventis,assets/img/Innoventis/Innoxone 1G Injection.webp
Innoxone S-1.5,Injection,1.5g,202.12,Innoventis,assets/img/Innoventis/Innoxone S 1 5 Injection.webp
Itravent-100,Capsule,10x1x10,179.23,Innoventis,assets/img/Innoventis/Itravent 100 Capsules.webp
Itravent-200,Capsule,10x1x10,237.82,Innoventis,assets/img/Innoventis/Itravent 200 Capsules.webp
Itravent-OC,Ointement,15gm,113.40,Innoventis,assets/img/Innoventis/Itravent-OC 15gm.webp
Lactulium,Solution,100ml,132.30,Innoventis,assets/img/Innoventis/Lactulium 200ml Solution.webp
Lactulium,Solution,200ml,264.60,Innoventis,assets/img/Innoventis/Lactulium 200ml Solution.webp
Linzolium-600,Tablet,10x1x10,383.56,Innoventis,assets/img/Innoventis/lINZOLIUM 600 TAB.webp
Livbenz-4G,Syrup,225ml,236.25,Innoventis,assets/img/Innoventis/Livbenz 4G Syrup 225ml.webp
Lopavent-2,Capsule,10x3x10,40.84,Innoventis,assets/img/Innoventis/LOPAVENT-2 10x3x10 Capsules.webp
Lycominta,Softgel,10x1x10,0.00,Innoventis,assets/img/Innoventis/Lycominta 10x1x10 Softgel.webp
Megadron-4,Tablet,20x14,92.80,Innoventis,assets/img/Innoventis/Megadron 4 20x14 Tablets.webp
Megadron-8,Tablet,20x14,138.15,Innoventis,assets/img/Innoventis/Megadron 8 20x14 Tablets.webp
Megadron-16,Tablet,20x14,221.70,Innoventis,assets/img/Innoventis/Megadron 16 20x14 Tablets.webp
Merobell 1gm,Injection,1gm,1024.40,Innoventis,assets/img/Innoventis/Merobell 1gm Injection.webp
Metrobact,Infusion,100ml,22.05,Innoventis,assets/img/Innoventis/Metrobact 100ml Infusion.webp
Mikabenz-500,Injection,10x3x2ml,116.48,Innoventis,assets/img/Innoventis/Mikabenz-500 10x3x2ml Injection.webp
Momebright,Cream,20gm,154.68,Innoventis,assets/img/Innoventis/MomeBright Cream 20gm.webp
MomeBright-HT,Cream,20gm,0.00,Innoventis,assets/img/Innoventis/MomeBright-HT Cream 20gm.jpg
Montilium-BL,Tablet,10x1x10,201.00,Innoventis,assets/img/Innoventis/Montilium-BL 10x1x10 Tablets.webp
Montilium-FX,Tablet,10x1x10,239.00,Innoventis,assets/img/Innoventis/Montilium-FX 10x1x10 Tablets.webp
Montilium-LC,Syrup,30ml,77.13,Innoventis,assets/img/Innoventis/Montilium-LC 30ml Syrup.webp
Montilium-LC,Tablet,10x1x15,322.78,Innoventis,assets/img/Innoventis/Montilium-LC Tablets 10x1x15.jpg
Moxiride,Eye Drop,25x1x5ml,183.56,Innoventis,assets/img/Innoventis/Moxiride 25x1x5ml Eye Drops.webp
Moxiride-D,Eye Drop,10ml,183.56,Innoventis,assets/img/Innoventis/Moxiride-D Eye Droper 10ml.webp
Moxiride-K,Eye Drop,25x1x10ml,183.56,Innoventis,assets/img/Innoventis/Moxiride-K 25x1x10ml Eye Drops.webp
Moxirol-250,Capsule (Yellow/Grey),10x3x10,26.25,Innoventis,assets/img/Innoventis/Moxirol-250 Capsules 10x3x10 (Y-G) And (R-W).webp
Moxirol-250 DT,Tablet,20x10,126.56,Innoventis,assets/img/Innoventis/Moxirol-250 DT 20x10 Tablets.webp
Moxirol-500,Capsule,10x2x10,79.17,Innoventis,assets/img/Innoventis/Moxirol-500 Capsules 10x2x10.webp
Moxirol-CV 228.5,Dry Syrup,30ml,65.20,Innoventis,assets/img/Innoventis/Moxirol-CV 228-5 Dry Syrup.webp
Moxirol-CV 375,Tablet,10x2x10,240.70,Innoventis,assets/img/Innoventis/Moxirol-CV 375 10x2x10 Tablets.webp
Moxirol-CV 625,Tablet,20x6,118.06,Innoventis,assets/img/Innoventis/Moxirol-CV 625 Tab 20x6 Alu Alu.webp
Moxirol-CV 625,Tablet,10x1x10,196.77,Innoventis,assets/img/Innoventis/Moxirol-CV 625 Tab 10x1x10 Alu Alu.webp
Moxirol-CV-DS,Syrup,30ml,196.15,Innoventis,assets/img/Innoventis/Moxirol-CV-DS Sry Syrup 30ml.webp
Moxirol-LB 625,Tablet,10x2x10,424.85,Innoventis,assets/img/Innoventis/Moxirol-LB 625 10x2x10 Tablets.webp
Moxirol-Plus LB,Capsule,20x10,96.37,Innoventis,assets/img/Innoventis/MOxirol-Plus LB 20x10 Capsules.webp
Naclofen-SPAS,Tablet,20x10,99.82,Innoventis,assets/img/Innoventis/Naclofen Spas 20x10 Tablets.webp
Naclofen-200 SR,Tablet,10x10,88.68,Innoventis,assets/img/Innoventis/Naclofen-200 SR Tablets.jpg
Naclofen-Cold,Tablet,20x10,74.25,Innoventis,assets/img/Innoventis/Naclofen-Cold 20x10 Tablets.webp
Naclofen-MP,Suspension,60ml,59.88,Innoventis,assets/img/Innoventis/Naclofen-MP 60ml Suspenction.webp
Naclofen-MP DS,Suspensiont,60ml,106.00,Innoventis,assets/img/Innoventis/Naclofen-MP DS 60ml.webp
Naclofen-MR,Tablet,30x10,101.05,Innoventis,assets/img/Innoventis/Naclofen-MR  30x10 Tablets.webp
Naclofen-P,Tablet,10x2x10,63.90,Innoventis,assets/img/Innoventis/Naclofen-P 10x2x10 Tablets.webp
Naclofen-SP,Tablet,30x10,124.70,Innoventis,assets/img/Innoventis/Naclofen-SP 30x10 Tablets.webp
Naclofen-TH4,Tablet,10x1x10,0.00,Innoventis,assets/img/Innoventis/Naclofen-TH4 10x1x10 Tablets.webp
Nimubenz-P,Tablet,10x2x10,59.80,Innoventis,assets/img/Innoventis/Nimubenz-P Tablets 10x2x10.jpg
NS,Injection,100ml,61.87,Innoventis,assets/img/Innoventis/ns-0-9wv-infusion-100ml.webp
Nurovent-NT,Tablet,10x10,205.88,Innoventis,assets/img/Innoventis/Nurovent NT 10x10 Tablets.webp
Nurovent-NTM,Tablet,10x10,224.60,Innoventis,assets/img/Innoventis/Nurovent NTM 10x10 Tablets.webp
Nurovent-PLUS,Capsule,10x1x10,198.00,Innoventis,assets/img/Innoventis/Nurovent- PLUS 10x1x10 Capsules.webp
Nurovent-500,Tablet,20x10,67.50,Innoventis,assets/img/Innoventis/Nurovent-500 20x10 Tablets.webp
NUROVENT-D3,Tablet,10x10,206.25,Innoventis,assets/img/Innoventis/NUROVENT-D3 Tablets.webp
Nurovent-Forte 2500,Injection,2ml,111.37,Innoventis,assets/img/Innoventis/Nurovent-Forte 2500mcg Injection.jpg
Nurovent-OD,Tablet,20x10,67.50,Innoventis,assets/img/Innoventis/NUROVENT-OD Tablets.webp
Nurovent-PG,Capsule,20x10,198.00,Innoventis,assets/img/Innoventis/Nurovent-PG 20x10 Capsules.webp
Nurovent-PLUS,Injection,10x2ml,158.80,Innoventis,assets/img/Innoventis/Nurovent-PLUS Injection.webp
Nutori-90,Tablet,5x3x15,192.80,Innoventis,assets/img/Innoventis/Nutori-90mg 5x3x15 Tablets.webp
Nutori-MR,Tablet,10x1x10,285.60,Innoventis,assets/img/Innoventis/Nutori-MR 10x1x10 Tablets.webp
Nutori-PLUS,Tablet,5x3x15,149.73,Innoventis,assets/img/Innoventis/Nutori-PLUS 5x3x15 Tablets.webp
Omilan,Capsule,20x20,61.74,Innoventis,assets/img/Innoventis/Omilan Capsules 20x20.webp
Omilan-D,Capsule,20x20,61.74,Innoventis,assets/img/Innoventis/Omilan-D 20x20 Capsules.webp
Omilan-MPS,Suspension,170ml,113.43,Innoventis,assets/img/Innoventis/Omilan-MPS.webp
Omilan-MPS O,Suspension,170ml,123.75,Innoventis,assets/img/Innoventis/Omilan-MPS O  Suspension 170ml.webp
Omilan-Raft,Syrup,150ml,201.00,Innoventis,assets/img/Innoventis/Omilan-RAFT 150ml Suspension.webp
Ondilan-MD,Tablet,20x10,55.23,Innoventis,assets/img/Innoventis/Ondilan-MD 20x10 Tablets.webp
Optisooth,Eye Drops,10ml,115.12,Innoventis,assets/img/Innoventis/OPTISOOTH EYE DROPS 10ml.webp
Ostolium,Syrup,200ml,195.76,Innoventis,assets/img/Innoventis/Ostolium Suspension 200ml.webp
Pantolium-40,Tablet,20x10,104.80,Innoventis,assets/img/Innoventis/Pantolium-40 20x10 Tablets.webp
Pantolium-40,Injection,40mg,54.24,Innoventis,assets/img/Innoventis/Pantolium-40 Injection.webp
Pantolium-D,Tablet,20x15,104.80,Innoventis,assets/img/Innoventis/Pantolium-D 20x15 Tablets.webp
Pantolium-DSR,Capsule,capsules,158.75,Innoventis,assets/img/Innoventis/Pantolium-DSR Capsules.webp
Pantolium-LSR,Capsule,10x1x10,292.85,Innoventis,assets/img/Innoventis/Pantolium-LSR 10x1x10 Capsules.webp
Paralium,Injection,100ml,540.00,Innoventis,assets/img/Innoventis/Paralium 100ml Infusion.webp
Pepran-150,Tablet,20x30,77.30,Innoventis,assets/img/Innoventis/Pepran-150 20x30 Tablets.webp
Pepran-300,Tablet,20x10,46.30,Innoventis,assets/img/Innoventis/Pepran-300 20x10 Tablets.webp
Pepran-D,Tablet,20x10,43.65,Innoventis,assets/img/Innoventis/Pepran-D 20x10 Tablets.webp
Pepran-O,Tablet,20x10,47.40,Innoventis,assets/img/Innoventis/Pepran-O 20x10 Tablets.webp
Piptabenz 4.5,Injection,12x20,429.45,Innoventis,assets/img/Innoventis/Piptabenz 4.5g Injection.webp
Podbact 100,Dry Syrup,30ml,165.00,Innoventis,assets/img/Innoventis/Podbact 100 dry Syrup.jpg
Podbact 200,Tablet,10x1x10,232.00,Innoventis,assets/img/Innoventis/Podbact 200mg 10x1x10 Tablets.webp
Podbact,Drop,10ml,81.67,Innoventis,assets/img/Innoventis/Podbact Drops.webp
Podbact-100,Tablet,10x1x10,113.43,Innoventis,assets/img/Innoventis/Podbact-100 Tablets 10x1x10.webp
Podbact-50,Dry Syrup,30ml,107.75,Innoventis,assets/img/Innoventis/Podbact-50 Dry Syrup 30ml.webp
Podbact-CV,Dry Syrup,30ml,158.81,Innoventis,assets/img/Innoventis/Podbact-CV Dry Syrup 30ml.jpg
Power-Jump,Softgel,10x2x15,233.25,Innoventis,assets/img/Innoventis/Power-Jump 10x2x15 Softgel.webp
PregaEdge,Test Kit,50 Kit,88.00,Innoventis,assets/img/Innoventis/PregaEdge Test Kit 50kit.webp
Protilium,Protein Powder(Chocolate),200gm,366.00,Innoventis,assets/img/Innoventis/Protilium Chocolate Protein Powder.jpg
Protilium,Protein Powder(Mango),200gm,634.00,Innoventis,assets/img/Innoventis/Protilium Mango Flavour 3D.jpg
Protilium MOM,Protein Powder(Vanilla),200gm,407.18,Innoventis,assets/img/Innoventis/Protilium MOM 200g Protine Powder.jpg
Rabilanta-DSR,Capsule,20x10,147.40,Innoventis,assets/img/Innoventis/Rabilanta DSR Capsules 20x10.webp
Rabilanta-LSR,Capsule,10x1x10,253.65,Innoventis,assets/img/Innoventis/Rabilanta-LSR 10x1x10 Capsules.jpg
Raxovent DX,Syrup,100ml,128.49,Innoventis,assets/img/Innoventis/RAXOVENT-DX 100 ml.webp
Rifabenz-400,Tablet,10x1x10,309.37,Innoventis,assets/img/Innoventis/Rifabenz 400 10x1x10 Tablet.jpg
Scabibenz,Lotion,50ml,103.12,Innoventis,assets/img/Innoventis/Scabibenz Lotion.jpg
Sinominic,Tablet,20x10,58.12,Innoventis,assets/img/Innoventis/Sinominic 20x10 Tablets.webp
Sinominic,Nasal Spray,10ml,58.12,Innoventis,assets/img/Innoventis/Sinominic Nasal Spray 10ml.webp
Sinominic-DS,Suspension,60ml,86.62,Innoventis,assets/img/Innoventis/Sinominic-DS Suspension 60ml.jpg
Sorbilactin,Solution,200ml,173.43,Innoventis,assets/img/Innoventis/Sorbilactin Soluution 200ml.webp
Suprapep,Suspension,170ml,156.75,Innoventis,assets/img/Innoventis/Suprapep 170ml.jpg
Suprapep-O,Suspension,170ml,204.18,Innoventis,assets/img/Innoventis/Suprapep-O-suspension 170ml.jpg
Suprigest-200,Softgel,10x1x10,381.80,Innoventis,assets/img/Innoventis/Suprigest-200 Softgel Capsules.jpg
Suprigest-200SR,Tablet,10x1x10,448.59,Innoventis,assets/img/Innoventis/Suprigest-200SR Tablets.jpg
Suprigest-300SR,Tablet,10x1x10,600.00,Innoventis,assets/img/Innoventis/Suprigest-300 Tablets.jpg
Surelan-40SR,Tablet,10x10,97.90,Innoventis,assets/img/Innoventis/Surelan-40SR Tablets.jpg
SWFI,Sterile Water,50x10,2.60,Innoventis,assets/img/Innoventis/swfi 50X10.jpg
Tryptovent,Tablet,10x1x30,77.17,Innoventis,assets/img/Innoventis/Tryptovent 10x1x30 Tablets.webp
Udilium-150,Tablet,10x15,340.00,Innoventis,assets/img/Innoventis/Udilium-150mg 10x15 Tablets.webp
Udilium-300,Tablet,10x15,653.40,Innoventis,assets/img/Innoventis/Udilium-300mg 10x15 Tablets.webp
Urifurantin 100SR,Tablet,10x10,71.95,Innoventis,assets/img/Innoventis/URIFURANTIN 100SR TABLETS.jpg
Ventograin-RF,Tablet,20x10,120.00,Innoventis,assets/img/Innoventis/Ventograin-RF 20x10 Tablets.jpg
Ventoric-100,Tablet,10x10,20.26,Innoventis,assets/img/Innoventis/Ventoric-100 Tablets.jpg
Ventoric-300,Tablet,10x10,60.58,Innoventis,assets/img/Innoventis/Ventoric-300 Tablets.jpg
Waxovent,Ear Drop,10ml,88.65,Innoventis,assets/img/Innoventis/Waxovent Ear Drop 10ml.webp
X-Flow-Max,Tablet,24x1x4,271.20,Innoventis,assets/img/Innoventis/X-Flow Max 24x1x4 Tablets.webp
Xerominic,Tablet(Blue),10x5x10,58.77,Innoventis,assets/img/Innoventis/Xerominic Tablets (Blue).webp
Xerominic,Tablet(Green),10x5x10,58.77,Innoventis,assets/img/Innoventis/Xerominic Tablets (Green).webp
Xerominic,Tablet(Pink),Tablet,10x5x10,58.77,Innoventis,assets/img/Innoventis/Xerominic Tablets (Pink).webp
Xerominic 10,Tablet,20x10,72.18,Innoventis,assets/img/Innoventis/Xerominic 10mg Tablets.webp
Xerominic-AX,Tablet,20x10,76.87,Innoventis,assets/img/Innoventis/Xerominic-AX 20x10 Tablets.webp
Xerominic-AX,Syrup,100ml,119.62,Innoventis,assets/img/Innoventis/Xerominic-AX Syrup.jpg
Zanospan,Eye Drop,10ml,74.25,Innoventis,assets/img/Innoventis/ZANOSPAN EYE DROPS 10ML.jpg
Zanospan-200,Tablet(Alu-Alu),20x10,124.77,Innoventis,assets/img/Innoventis/Zanospan-200 Tab.webp
Zanospan-200,Tablet(Blister),20x10,124.77,Innoventis,assets/img/Innoventis/Zanospan-200 Tab Blister.webp
Zanospan-D,Eye Drop,10ml,74.25,Innoventis,assets/img/Innoventis/Zanospan-D Eye Drop 10ml.webp
Zanospan-M,Suspension,30ml,80.15,Innoventis,assets/img/Innoventis/Zanospan-M Suspension 30ml.webp
Zanospan-OZ,Tablet,20x10,170.15,Innoventis,assets/img/Innoventis/Zanospan-OZ Tablets.jpg
Acipox,Ointement,15gm,0.00,Ultima,assets/img/Ultima/Acipox 15gm Cream.webp
Acipox- 400,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Acipox- 400 10x10 Tablets.webp
Acipox- 800,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Acipox- 800 10x10 General.webp
Actigrain-5,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Actigrain-5 20x10 Tablets.webp
Amlovent-5,Tablet,20x14,0.00,Ultima,assets/img/Ultima/Amlovent-5 20x14 Tablets.webp
Apilactin Plus,Drop,30ml,0.00,Ultima,assets/img/Ultima/Apilactin Plus 30ml Drops.webp
Avizact,Injection,-,0.00,Ultima,assets/img/Ultima/Avizact Injection.webp
BILOTRA-40,Tablet,10x1x10,168.45,Ultima,assets/img/Ultima/BILOTRA-40 10x1x10 Tablets.webp
BISOVENT 2.5,Tablet,20x10,0.00,Ultima,assets/img/Ultima/BISOVENT 2.5 tablets 20x10.webp
Bactofix-AZ,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Bactofix-AZ 10x1x10 Tablets.webp
Bactofix-O,Other,30ml,0.00,Ultima,assets/img/Ultima/Bactofix-O 30ml Tab.webp
Bactofix-o,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Bactofix-o 30ml Dry Syrup.webp
Bactopraz S 1,Injection,5 gm,0.00,Ultima,assets/img/Ultima/Bactopraz S 1 5 gm  Injection.webp
Bilotra,Oral Solution,60ml,0.00,Ultima,assets/img/Ultima/Bilotra 60ml Oral Solution.webp
Bisovent-5,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Bisovent-5 20x10 Tablets.webp
Buderon,Respules 10x5x2ml,2ml,0.00,Ultima,assets/img/Ultima/Buderon 10x5x2ml Respules.webp
Candivent-B,Ointement,15gm,84.56,Ultima,assets/img/Ultima/Candivent-B 15gm Cream.webp
Capilate-P,Ointement,30gm,170.15,Ultima,assets/img/Ultima/Capilate-P 30gm Cream.webp
Cilarol-20,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Cilarol-20 20x10 Tablets.webp
Clarilite,Ointement,15gm,158.81,Ultima,assets/img/Ultima/Clarilite Cream 15gm Cream.webp
Clindarol-300,Capsule,10x1x10,305.00,Ultima,assets/img/Ultima/Clindarol-300 10x1x10 Capsules.webp
Clobevent,Ointement,15gm,85.80,Ultima,assets/img/Ultima/Clobevent 15gm Cream.webp
Clopivent-75,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Clopivent-75 10x10 Tablets.webp
Clopivent-A 150,Capsule,10x10,0.00,Ultima,assets/img/Ultima/Clopivent-A 150 10x10 Capsules.webp
Coligut-L,Capsule,10x1x10,141.90,Ultima,assets/img/Ultima/Coligut-L Capsule 10x1x10.webp
Coligut-L,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Coligut-L Dry Syrup 30ml.webp
Colivent,Drop,30ml,74.85,Ultima,assets/img/Ultima/Colivent 30ml Drop.webp
Daophage-500,Tablet,10x2x5,0.00,Ultima,assets/img/Ultima/Daophage-500 10x2x5 Tablets.webp
Daophage-SR-1000 20x10Tablets,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Daophage-SR-1000 20x10Tablets.webp
Dermovent-5,Ointement,15gm,106.00,Ultima,assets/img/Ultima/Dermovent-5 15gm Cream.webp
Dilustone 30 N,Capsule,30 N,216.30,Ultima,assets/img/Ultima/Dilustone 30 N Capsules.webp
Doloride-Cold,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Doloride-Cold 20x10 Tablets.webp
Doloride-P,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Doloride-P 20x10 Tablets.webp
Dolosaid-MP DS,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Dolosaid-MP DS 60ml Suspension.webp
Dolosaid-MP,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Dolosaid-MP 60ml Suspension.webp
Dolosaid-RAB SR,Capsule,10x1x10,174.60,Ultima,assets/img/Ultima/Dolosaid-RAB SR 10x1x10 Capsules.webp
Dolosaid-SP,Tablet,20x10,115.70,Ultima,assets/img/Ultima/Dolosaid-Sp 20x10 Tablets.webp
Donacortil-TM,Capsule,10x1x10,705.30,Ultima,assets/img/Ultima/Donacortil-Tm 10x1x10 Capsules.webp
Doxivent-LB,Capsule,20x10,136.00,Ultima,assets/img/Ultima/Doxivent-Lb 20x10 Capsules.webp
Duosma,Respules,4x5x2,0.00,Ultima,assets/img/Ultima/Duosma Respules 4x5x2 5 ml.webp
Eminta-PLUS,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Eminta-PLUS 10x1x10 Capsules.webp
Esovent DSR,Capsule,10x1x10,172.15,Ultima,assets/img/Ultima/Esovent DSR Capsules 10x1x10.webp
Esovent IT,Tablet,10x10,173.67,Ultima,assets/img/Ultima/Esovent IT 10x10 Tablets.webp
Esovent-LSR,Capsule,10x1x10,237.00,Ultima,assets/img/Ultima/Esovent-Lsr 10x1x10 Capsules.webp
Farogard-200,Tablet,10x1x6,0.00,Ultima,assets/img/Ultima/Farogard-200 10x1x6 Tablets.webp
Farogrd,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Farogrd Dry Syrup 30ml.webp
Fepadol-120,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Fepadol-120 60ml Syrup.webp
Fepadol-125 Susp 60ml,Other,60ml,0.00,Ultima,assets/img/Ultima/Fepadol-125 Susp 60ml.webp
Fepadol-240,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Fepadol-240 60ml Syrup.webp
Ferivent Inj 100mg-5ml 5x1x5ml,Other,100mg,0.00,Ultima,assets/img/Ultima/Ferivent Inj 100mg-5ml 5x1x5ml.webp
Ferivent-Z,Capsule,10x2x15,134.75,Ultima,assets/img/Ultima/Ferivent-Z 10x2x15 Capsules.webp
Flupress-20,Capsule,10x2x15,64.41,Ultima,assets/img/Ultima/Flupress-20 10x2x15caps Capsules.webp
Flutigra,Respules,2ml,0.00,Ultima,assets/img/Ultima/Flutigra Respules for Inhalation 10x5x2ml.webp
Gabavent-300,Capsule,10x10,132.72,Ultima,assets/img/Ultima/Gabavent-300 10x10 Capsules.webp
Gasfiz Raft,Syrup,150ml,0.00,Ultima,assets/img/Ultima/Gasfiz Raft 150ml Syrup.webp
Gastovent-DSR,Capsule,20x10,114.57,Ultima,assets/img/Ultima/Gastovent-Dsr 20x10 Capsules.webp
Gastovent-LSR,Capsule,10x1x10,204.18,Ultima,assets/img/Ultima/Gastovent-Lsr 10x1x10 Capsules.webp
Glipra-1,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Glipra-1 10x10 Tablets.webp
Glipra-2,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Glipra-2 10x10 Tablets.webp
Ibuvent-Plus,Tablet,20x20,0.00,Ultima,assets/img/Ultima/Ibuvent-Plus 20x20 Tablets.webp
Indovent-25,Capsule,20x10,53.31,Ultima,assets/img/Ultima/Indovent-25 20x10 Capsules.webp
Indovent-SR,Capsule,20x10,124.78,Ultima,assets/img/Ultima/Indovent-Sr 20x10 Capsules.webp
Insta-Play Extra Super Dotted(Chocolate),Condom,48x1x3N,33.00,Ultima,assets/img/Ultima/Insta Play 48x1x3n Condom.webp
Insta-Play Ultra Thin(Chocolate),Condom,3N,34.71,Ultima,assets/img/Ultima/Insta Play Condom Chocolate Ultra Thin 3N.webp
Insta-Play Extra Time(Strawberry),Condom,3N,34.71,Ultima,assets/img/Ultima/Insta Play Strawberry Ultra Thin  Condom.webp
Insta-Play Extra Super Dotted(Strawberry),Condom,3N,33.00,Ultima,assets/img/Ultima/Insta Play Condom Strawberry Extra Dotted.webp
Itromax-100,Capsule,10x1x10,179.23,Ultima,assets/img/Ultima/Itromax-100 10x1x10 Capsules.webp
Itromax-200,Capsule,10x1x10,237.82,Ultima,assets/img/Ultima/Itromax-200 10x1x10 Capsules.webp
Itromax-SB-130mg,Capsule,10x1x10,294.91,Ultima,assets/img/Ultima/Itromax-SB-130mg 10x1x10 Capsules.webp
Itromax-SB-65mg,Capsule,10x1x10,147.29,Ultima,assets/img/Ultima/Itromax-SB-65mg 10x1x10 Capsules.webp
Lipivent-40mg,Tablet,8x5x10,207.58,Ultima,assets/img/Ultima/Lipivent-40mg 8x5x10 Tablets.webp
Lipivent-Gold 10,Capsule,10x15,53.44,Ultima,assets/img/Ultima/Lipivent-Gold 10 10x15 Capsules.webp
Lipivent-Gold 20,Capsule,10x15,135.00,Ultima,assets/img/Ultima/Lipivent-Gold 20 10x15 Capsules.webp
Lulinaz spary 30ml,Nasal Spray,30ml,0.00,Ultima,assets/img/Ultima/Lulinaz spary 30ml.webp
Methocort,Injection,500mg,0.00,Ultima,assets/img/Ultima/METHOCORT 500mg Injecton.webp
Moxilanta-CV,Drop,10ml,0.00,Ultima,assets/img/Ultima/MOXILANTA CV Droper 10ml.webp
Megadron 16,Tablet,20x14,0.00,Ultima,assets/img/Ultima/Megadron 16 20x14 Tablets.webp
Methocort,Injection,2ml,0.00,Ultima,assets/img/Ultima/Methocort 2ml Injection 02.webp
Montiride FXA,Tablet,10X1X10,0.00,Ultima,assets/img/Ultima/Montiride FXA Tablets 10X1X10.webp
Montiride-FXA,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Montiride-FXA 10x10 Tablets.webp
Moxilanta-250,Capsule,10x3x10,26.25,Ultima,assets/img/Ultima/Moxilanta-250 10x3x10  Capsules.webp
Moxilanta-500,Capsule,10x3x10,79.17,Ultima,assets/img/Ultima/Moxilanta-500 10x3x10  Capsules.webp
Moxilanta-CV 228.5,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 228.5 Dry Syrup 30ml.webp
Moxilanta-CV 228.5,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 228.5 10x1x10 Tablets.webp
Moxilanta-CV 375,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 375 10x1x10 Tablets.webp
Moxilanta-CV 457,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 457 Dry Syrup 30ml.webp
Moxilanta-CV 457,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 457 10x1x10 Tablets.webp
Moxilanta-CV 625,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 625 10x1x10 Tablets.webp
Moxilanta-CV 625,Tablet,10x1x6,0.00,Ultima,assets/img/Ultima/Moxilanta-CV 625 10x1x6 Tablets.webp
Mylabion,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Mylabion 10x1x10 Capsules.webp
Mylabion,Syrup,100 ml,0.00,Ultima,assets/img/Ultima/Mylabion Syrup 100 ml.webp
Mylabion,Syrup,200ml,0.00,Ultima,assets/img/Ultima/Mylabion 200ml Syrup.webp
Mylabion-Plus,Capsule,5x1x10,0.00,Ultima,assets/img/Ultima/Mylabion-Plus 5x1x10 Capsules.webp
Natadol-50mg,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Natadol-50mg 10x1x10 Tablets.webp
Oftirol-200,Syrup,-,0.00,Ultima,assets/img/Ultima/Oftirol-200 Syrup Bottal.webp
Oftirol-M,Syrup,30ml,0.00,Ultima,assets/img/Ultima/Oftirol-M 30ml Syrup.webp
Oftirol-M,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Oftirol-M 60ml Syrup.webp
Oftirol-OZ,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Oftirol-OZ Tablets 20x10.webp
Omefiz,Capsule,20x15,0.00,Ultima,assets/img/Ultima/Omefiz 20x15 Capsules.webp
Omefiz-D,Capsule,20x15,0.00,Ultima,assets/img/Ultima/Omefiz-D 20x15 Capsules.webp
Omiup,Capsule,20x15,0.00,Ultima,assets/img/Ultima/Omiup 20x15 Capsules.webp
Omiup-D,Capsule,20x15,0.00,Ultima,assets/img/Ultima/Omiup-D 20x15 Capsules.webp
Ondilium,Drop,30ml,0.00,Ultima,assets/img/Ultima/Ondilium 30ml Drop.webp
Oravent,Ointement,15gm,0.00,Innoventis,assets/img/Innoventis/Oravent 15gm Cream.webp
Oravent,Tablet,20x10,0.00,Innoventis,assets/img/Innoventis/Oravent 20x10 Tablets.webp
Oravent,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Oravent 20x10 Tablets.webp
Oravent-Plus,Ointement,5gm,0.00,Innoventis,assets/img/Innoventis/Oravent-Plus 5gm Cream.webp
Pantoraz-40,Tablet,20x15,0.00,Ultima,assets/img/Ultima/Pantoraz-40 20x15 Tablets.webp
Pantoraz-D,Tablet,20x15,0.00,Ultima,assets/img/Ultima/Pantoraz-D 20x15 Tablets.webp
Pantovent-Dsr,Capsule,20x10,0.00,Ultima,assets/img/Ultima/Pantovent-Dsr 20x10 Capsules.webp
Pantovent-Lsr,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Pantovent-Lsr 10x1x10 Capsules.webp
Phylobron,Capsule,10x10,0.00,Ultima,assets/img/Ultima/Phylobron 10x10 Capsules.webp
Piptavent,Injection,1.125 mg,0.00,Ultima,assets/img/Ultima/Piptavent 1.125 mg Injection.webp
Piptavent,Injection,1.125mg,0.00,Ultima,assets/img/Ultima/Piptavent 1.125mg Injection.webp
Pregavent 75mg,Capsule,10x10,0.00,Ultima,assets/img/Ultima/Pregavent 75mg 10x10 Capsules.webp
Pregavent-300,Capsule,10x15,0.00,Ultima,assets/img/Ultima/Pregavent-300 10x15 Capsules.webp
Pregavent-D 75-20,Capsule,10x10,0.00,Ultima,assets/img/Ultima/Pregavent-D 75-20 10x10 Capsules.webp
Pregavent-M,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Pregavent-M 10x1x10 Capsules.webp
Proditil CV 100+62.5,Dry Syrup,10x1x10,0.00,Ultima,assets/img/Ultima/Proditil CV 100+62.5 10x1x10 Dry Syrup.webp
Proditil CV 100+62.5,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Proditil CV 100+62.5 10x1x10 Tablets.webp
Proditil,Drop,10ml,0.00,Ultima,assets/img/Ultima/Proditil Drops 10ml.webp
Proditil-100,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Proditil-100 30ml Dry Syrup.webp
Proditil-50,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Proditil-50 30ml Dry Syrup.webp
Proditil-CV,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Proditil-CV Dry Syrup 30ml.webp
Protiminta (Chocolate),Other,-,0.00,Ultima,assets/img/Ultima/Protiminta (Chocolate).webp
Ranilium-O Combipack,Injection,-,0.00,Ultima,assets/img/Ultima/Ranilium-O Combipack Injection.webp
Rejuvital Gold,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Rejuvital Gold Capsules 10x1x10.webp
Rejuvital-EYE,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Rejuvital-EYE 10x1x10 Capsules.webp
Rifavent 400,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Rifavent 400 20x10 Tablets.webp
Rozucard-Gold,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Rozucard-Gold 10x1x10 Capsules.webp
Rozucard-Gold-20,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Rozucard-Gold-20 10x1x10 Capsules.webp
Salazomax 500mg,Tablet,10x2x10,0.00,Ultima,assets/img/Ultima/Salazomax 500mg 10x2x10 Tablets.webp
Sildostat-8,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Sildostat-8 10x1x10 Capsules.webp
Sildostat-D8,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Sildostat-D8 10x1x10 Capsules.webp
Sinovent Vapor,Capsule,20x10,0.00,Ultima,assets/img/Ultima/Sinovent Vapor 20x10 Capsules.webp
Sinovent,Nasal Spray,10ml,0.00,Ultima,assets/img/Ultima/Sinovent 10ml Spray.webp
Sinovent,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Sinovent 60ml Syrup.webp
Sinovent-Rub 25g,Ointement,25g,0.00,Ultima,assets/img/Ultima/Sinovent-Rub 25g.webp
Skinbloom 24x1x15gm,Ointement,15gm,0.00,Ultima,assets/img/Ultima/Skinbloom 24x1x15gm Cream.webp
Skinbloom,Facewash,-,0.00,Ultima,assets/img/Ultima/Skinbloom Facewash.webp
Spapmovent,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Spapmovent 60ml Suspension.webp
Spasmovent,Drop,10ml,0.00,Ultima,assets/img/Ultima/Spasmovent Drop 10ml.webp
Sporivent-BD 375,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Sporivent-BD 375 10x10 Tablets.webp
Telirol-Am,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Telirol-Am 20x10 Tablets.webp
Terbiride,Ointement,15g,0.00,Ultima,assets/img/Ultima/Terbiride Cream 15g.webp
Thyrovent 100mcg,Tablet,10x100,0.00,Ultima,assets/img/Ultima/Thyrovent 100mcg 10x100 Tablets.webp
Thyrovent 25mcg,Tablet,10x100,0.00,Ultima,assets/img/Ultima/Thyrovent 25mcg 10x100 Tablets.webp
Thyrovent 50mcg,Tablet,10x100,0.00,Ultima,assets/img/Ultima/Thyrovent 50mcg 10x100 Tablets.webp
Thyrovent 75mcg,Tablet,10x100,0.00,Ultima,assets/img/Ultima/Thyrovent 75mcg 10x100 Tablets.webp
Torigesic-Plus,Tablet,5x3x15,0.00,Ultima,assets/img/Ultima/Torigesic-Plus 5x3x15 Tablets.webp
Tusston Cough,Lozenges,12x10,0.00,Ultima,assets/img/Ultima/Tusston Cough 12x10 Lozenges.webp
Tusston,Lozenges,35x10,0.00,Ultima,assets/img/Ultima/Tusston 35x10 Lozenges.webp
Uriride-0-4mg,Capsule,10x20,0.00,Ultima,assets/img/Ultima/Uriride-0-4mg 10x20 Capsules.webp
Uriride-D,Capsule,10x1x15,0.00,Ultima,assets/img/Ultima/Uriride-D 10x1x15 Capsules.webp
Utispas-OF,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Utispas-OF 10x10 Tablets.webp
VENTORAN 2X PAIN,Nasal Spray,35G,0.00,Ultima,assets/img/Ultima/VENTORAN 2X PAIN SPRAY 35G.webp
VenZolid,Dry Syrup,100mg,0.00,Ultima,assets/img/Ultima/VenZolid Dry Syrup 100mg.webp
Ventimox CV 3-3g,Dry Syrup,3g,0.00,Ultima,assets/img/Ultima/Ventimox CV 3-3g Dry Syrup 30ml.webp
Ventimox CV DS,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Ventimox CV DS Dry Syrup 30ml.webp
Ventimox CV,Injection,1.2gm,0.00,Ultima,assets/img/Ultima/Ventimox CV 1.2gm Injection.webp
Ventimox- CV 457,Dry Syrup,30ML,0.00,Ultima,assets/img/Ultima/Ventimox- CV 457 Dry Syrup 30ML.webp
Ventimox-125DT,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Ventimox-125DT 20x10 Tabletes.webp
Ventimox-250mg,Capsule,10x3x10,0.00,Ultima,assets/img/Ultima/Ventimox-250mg 10x3x10 Capsules.webp
Ventimox-500,Capsule,10x2x10,0.00,Ultima,assets/img/Ultima/Ventimox-500 10x2x10 Capsules.webp
Ventimox-CV 1000,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Ventimox-CV 1000 Tablet 10x1x10.webp
Ventimox-CV 2-2gm,Drop,2gm,0.00,Ultima,assets/img/Ultima/Ventimox-CV 2-2gm Droper 10ml.webp
Ventimox-CV 228-5,Tablet,10x1x6,0.00,Ultima,assets/img/Ultima/Ventimox-CV 228-5 10x1x6 Tablets.webp
Ventimox-CV 375,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Ventimox-CV 375 10x1x10 Tablets.webp
Ventimox-Cv,Drop,10ml,0.00,Ultima,assets/img/Ultima/Ventimox-Cv 10ml Drop.webp
VentoPlex-L,Syrup,100ml,0.00,Ultima,assets/img/Ultima/VentoPlex-L Syrup 100ml.webp
VentoPlex-L,Syrup,200ml,0.00,Ultima,assets/img/Ultima/VentoPlex-L Syrup 200ml.webp
Ventocal D3,Capsule,-,0.00,Ultima,assets/img/Ultima/Ventocal D3 Softgel Capsules.webp
Ventocal Joints,Capsule,10x1x10,0.00,Ultima,assets/img/Ultima/Ventocal Joints Softgel 10x1x10 Capsules.webp
Ventokast-LC Junior,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Ventokast-LC Junior 20x10 Tablets.webp
Ventokast-Lc,Tablet,20x1x10,0.00,Ultima,assets/img/Ultima/Ventokast-Lc 20x1x10 Tablets.webp
Ventomycin 12gm-30ml,Other,12gm,0.00,Ultima,assets/img/Ultima/Ventomycin 12gm-30ml.webp
Ventomycin DS 12gm-30ml,Other,12gm,0.00,Ultima,assets/img/Ultima/Ventomycin DS 12gm-30ml.webp
Ventoran MR,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Ventoran MR 20x10 Tablets.webp
Ventoran,Gel,10g,0.00,Ultima,assets/img/Ultima/Ventoran 10g Pain-Gel single.webp
Ventoran-P,Tablet,10x2x10,0.00,Ultima,assets/img/Ultima/Ventoran-P 10x2x10 Tablets Yellow PVC.webp
Ventoran-P,Tablet,10x2x10,0.00,Ultima,assets/img/Ultima/Ventoran-P 10x2x10 Tablets.webp
Ventoxol-L,Syrup,60ml,0.00,Ultima,assets/img/Ultima/Ventoxol-L 60ml Syrup.webp
Ventoxol-LS,Drop,15ml,0.00,Ultima,assets/img/Ultima/Ventoxol-LS 15ml Drops.webp
Voglivent-0-3 MD,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Voglivent-0-3 MD 20x10 Tablets.webp
Voglivent-MG3,Tablet,10x2x15,0.00,Ultima,assets/img/Ultima/Voglivent-MG3 10x2x15 Tablets.webp
Xerominic,Tablet,-,0.00,Innoventis,assets/img/Innoventis/Xerominic Tablets (Pink).webp
Xiotil-125mg,Dry Syrup,125mg,0.00,Ultima,assets/img/Ultima/Xiotil-125mg Dry Syrup.webp
Zincominta,Syrup,200ml,0.00,Ultima,assets/img/Ultima/Zincominta 200ml Syrup.webp
Zincominta-DT,Tablet,4x5x10,0.00,Ultima,assets/img/Ultima/Zincominta-DT 4x5x10 Tablets.webp
Zithroset XL,Dry Syrup,100mg,0.00,Ultima,assets/img/Ultima/Zithroset XL Dry Syrup 100mg.webp
Zithroset XL,Dry Syrup,200mg,0.00,Ultima,assets/img/Ultima/Zithroset XL Dry Syrup 200mg.webp
Zyfix 100,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Zyfix 100 Dry Syrup 30ml.webp
Zyfix 50,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Zyfix 50 Dry Syrup 30ml.webp
Zyfix O,Dry Syrup,30ml,0.00,Ultima,assets/img/Ultima/Zyfix O Dry Syrup 30ml.webp
Zyfix-0,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Zyfix-0 10x10 Tablets.webp
Zyfix-100,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Zyfix-100 20x10 Tablets.webp
Zyfix-100LB,Tablet,10x10,0.00,Ultima,assets/img/Ultima/Zyfix-100LB 10x10 Tablets.webp
Zyfix-200,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Zyfix-200 10x1x10 Tablets.webp
Zyfix-200,Tablet,20x10,0.00,Ultima,assets/img/Ultima/Zyfix-200 20x10 Tablets.webp
Zyfix-CV 325,Tablet,10x1x10,0.00,Ultima,assets/img/Ultima/Zyfix-CV 325 10x1x10 Tablets.webp
`;

// Precompiled product image map to fix casing and naming differences
const productImagesMap = {
  "ACCUZITH-250 | 20x6 | Tablet": "Accuzith-250 20x6 Tablets.webp",
  "ACCUZITH-500 | 30x3 | Tablet": "Accuzith-500 30x3 Tablets.webp",
  "ACCUZITH-500 XL | 10x5 | Tablet": "Accuzith-500 XL 10x5 Tablets.webp",
  "ACIPOX | 15gm | Ointement": "Acipox 15gm Cream.webp",
  "ACIPOX- 400 | 10x10 | Tablet": "Acipox- 400 10x10 Tablets.webp",
  "ACIPOX- 800 | 10x10 | Tablet": "Acipox- 800 10x10 Tablets.webp",
  "ACNEVENT | 10x1x10 | Softgel": "Acnevent 10x1x10 Softgel Capsules.webp",
  "ACNEVENT PLUS | 15gm | Ointement": "Acnevent Plus 15gm Cream.webp",
  "ACTIGRAIN-10 | 20x10 | Tablet": "Actigrain-10 20x10 Tablets.webp",
  "ACTIGRAIN-P | 10x10 | Capsule": "Actigrain-P 10x10 Capsules.webp",
  "ACTIVERT-16 | 20x10 | Tablet": "Activert-16 20x10 Tablets.webp",
  "ACTIVERT-8 | 10x10 | Tablet": "Activert-8 10x10 Tablets.webp",
  "ADIGARD | 25gm | Ointement": "Adigard 25gm Cream.webp",
  "AMLOVENT AT | 20x10tab | Tablet": "Amlovent At 20x10tab Tablets.webp",
  "APILACTIN PLUS | 200ml | Syrup": "Apilactin Plus 200ml Syrup.webp",
  "APILACTIN PLUS | 30ml | Drops": "Apilactin Plus 30ml Drops.webp",
  "APTIRIDE | 200ml | Syrup": "Aptiride 200ml Syrup.webp",
  "ARSHCURE | 1x30 | Capsule": "Arshcure 1x30 Capsules.webp",
  "AUXTOCEF-250 | 10x1x10 | Tablet": "Auxtocef-250 10x1x10 Tablets.webp",
  "AUXTOCEF-500 | 10x1x10 | Tablet": "Auxtocef-500 10x1x10 Tablets.webp",
  "AYU LAXIVENT | 10x10 | Tablet": "Ayu Laxivent 10x10 Tablets.webp",
  "BACTOFIX | 10ml | Drop": "Bactofix 10ml Drop.webp",
  "BACTOFIX-100 | 30ml | Dry Syrup": "Bactofix-100 30ml Dry Syrup.webp",
  "BACTOFIX-100DT | 20x10 | Tablet": "Bactofix-100dt 20x10 Tablets.webp",
  "BACTOFIX-200DT | 20x10 | Tablet": "Bactofix-200dt 20x10 Tablets.webp",
  "BACTOFIX-50 | 30ml | Dry Syrup": "Bactofix-50 30ml Dry Syrup.webp",
  "BACTOFIX-CV 325 | 10x1x6 | Tablet": "Bactofix-CV 325 10x1x6 Tablets.webp",
  "BACTOFIX-O | 30ml | Dry Syrup": "Bactofix-100 30ml Dry Syrup.webp",
  "BACTOFIX-O | 20x10 | Tablet": "Bactofix-100dt 20x10 Tablets.webp",
  "BACTOFIX-XL | 10x1x10 | Tablet": "Bactofix-Xl 10x1x10 Tablets.webp",
  "BACTOPRAZ S 1.5G | 20ml | Injection": "Bactopraz S 1.5g 20ml Injection.webp",
  "BACTOSPAN-250 | 20x10 | Tablet": "Bactospan-250 20x10 Tablets.webp",
  "BACTOSPAN-500 | 20x10 | Tablet": "Bactospan-500 20x10 Tablets.webp",
  "BECOMINTA-12 | 24x3 | Injection": "Becominta-12 24x3 Injection.webp",
  "BECOMINTA 4G | 3x10 | Softgel": "Becominta 4g 3x10 Softgel Capsules.webp",
  "BECOMINTA Z | 200ml | Syrup": "Becominta Z 200ml Syrup.webp",
  "BECOMINTA-L | 60ml | Dry Syrup": "Becominta-L 60ml Dry Syrup.webp",
  "BECOMINTA-TOTAL | 10x1x10 | Tablet": "Becominta-Total 10x1x10 Tablets.webp",
  "BETAVENT-N | 15gm | Ointement": "Betavent-N 15gm Cream.webp",
  "BILOTRA 20 | 10x1x10 | Tablet": "Bilotra 20 10x1x10 Tablets.webp",
  "BILOTRA DM | 100ml | Syrup": "Bilotra Dm 100ml Syrup.webp",
  "BILOTRA-M | 60ml | Syrup": "Bilotra-M 60ml Syrup.webp",
  "BILOTRA-M | 10x1x10 | Tablet": "Bilotra-M 10x1x10 Tablets.webp",
  "BISOVENT-2.5 | 20x10 | Tablet": "BISOVENT 2.5 tablets 20x10.webp",
  "BISOVENT-5 | 20x10 | Tablet": "BISOVENT 2.5 tablets 20x10.webp",
  "BRIVITRA 50 | 10x10 | Tablet": "Brivitra 50 10x10 Tablets.webp",
  "BUDERON | 10x5x2ml | Respules": "Buderon 10x5x2ml Respules.webp",
  "BUDERON 1MG | 2ml | Respules": "Buderon 1Mg 2ml Respules.webp",
  "BURNOLIUM | 20gm | Ointement": "Burnolium 20gm Cream.webp",
  "BUSCOVENT | 20x10 | Tablet": "Buscovent 20x10 Tablets.webp",
  "CALAVENT | 100ml | Lotion": "Calavent 100ml Lotion.webp",
  "CALCIVENT | 20x15 | Tablet": "Calcivent 20x15 Tablets.webp",
  "CALCIVENT  R/Y | 5x2x15 | Softgel": "Calcivent 5x2x15 Softgel Capsules (YR).webp",
  "CALCIVENT K2 FORTE | 10x1x10 | Softgel": "Calcivent K2 Forte 10x1x10 Softgel Capsules.webp",
  "CALCIVENT-2000 | 5x2x15 | Tablet": "Calcivent-2000 5x2x15 Tablets.webp",
  "CALCIVENT-D3 MAX | 10x1x15 | Softgel": "Calcivent-d3 Max 10x1x15 Softgel Capsules.webp",
  "CANDIVENT B | 30ml | Lotion": "Candivent B 30ml Lotion.webp",
  "CANDIVENT DUSTING | 75gm | Powder": "Candivent Powder 75g.webp",
  "CANDIVENT-B | 15gm | Ointement": "Candivent-B 15gm Cream.webp",
  "CANDIVENT-VG | 30gm | Ointement": "Candivent-Vg 30gm Cream.webp",
  "CANDIVENT-VT | 10x1x6 | Tablet": "Candivent-Vt 10x1x6 Tablets.webp",
  "CAPILATE-P | 30gm | Ointement": "Capilate-P 30gm Cream.webp",
  "CAPILATE-PLUS | 10x1x10 | Tablet": "Capilate-Plus 10x1x10 Tablets.webp",
  "CARIVENT | 5x15 | Tablet": "Carivent 5x15 Tablets.webp",
  "CARIVENT | 200ml | Syrup": "Carivent 200ml Syrup.webp",
  "CEFPOVENT-100 | 20x10 | Tablet": "Cefpovent-100 20x10 Tablets.webp",
  "CEFPOVENT-100 | 30ml | Dry Syrup": "Cefpovent-100 30ml Dry Syrup.webp",
  "CEFPOVENT-200 | 10x10 | Tablet": "Cefpovent-200 10x10 Tablets.webp",
  "CEFPOVENT-50 | 30ml | Dry Syrup": "Cefpovent-50 30ml Dry Syrup.webp",
  "CEFTIROL 250 | 7.5ml | Injection": "Ceftirol 250 7.5ml Injection.webp",
  "CEFTIROL 500 | 7.5ml | Injection": "Ceftirol 500 7.5ml Injection.webp",
  "CEFTIROL S-1.5 | 20ml | Injection": "Ceftirol S-1.5 20ml Injection.webp",
  "CEFTIROL S-375 | 10ml | Injection": "Ceftirol S-375 10ml Injection.webp",
  "CEFTIROL S-750 | 10ml | Injection": "Ceftirol S-750 10ml Injection.webp",
  "CEFTIROL-1G | 10ml | Injection": "Ceftirol-1g 10ml Injection.webp",
  "CEFTIROL-T 1.125 | 20ml | Injection": "Ceftirol-t 1.125 20ml Injection.webp",
  "CEFTIROL-T 281.25MG | 20ml | Injection": "Ceftirol-T 281.25mg Injection.webp",
  "CEFTIROL-T 562.5MG | 20ml | Injection": "Ceftirol-T 562.5mg Injection.webp",
  "CETROVENT-10 | 20x7x10 | Tablet": "Cetrovent-10 20x7x10 Tablets.webp",
  "CETROVENT-A | 20x10 | Tablet": "Cetrovent-A 20x10 Tablets.webp",
  "CHYMORIDE FORTE | 10x1x20 | Tablet": "Chymoride Forte 10x1x20 Tablets.webp",
  "CILAROL M-25 | 20x10 | Tablet": "CILAROL M-25 20x10 Tablets.webp",
  "CILAROL-M 50 | 20x10 | Tablet": "Cilarol-M 50 20x10 Tablets.webp",
  "CILAROL-10 | 20x10 | Tablet": "CILAROL M-25 20x10 Tablets.webp",
  "CITIRIDE-500 | 10x1x10 | Tablet": "Citiride-500 10x1x10 Tablets.webp",
  "CITIRIDE-P | 10x1x10 | Tablet": "Citiride-500 10x1x10 Tablets.webp",
  "CITIRIDE-P FORTE | 5x1x10 | Tablet": "Citiride-p Forte 5x1x10 Tablets.webp",
  "CITRASTONE | 100ml | Syrup": "Citrastone 100ml Syrup.webp",
  "CLARILITE CREAM | 15gm | Ointement": "Clarilite Cream 15gm Cream.webp",
  "CLARIVENT-125 ORAL | 30ml | Syrup": "Clarivent-125 Oral 30ml Syrup.webp",
  "CLARIVENT-250 | 5x1x10 | Tablet": "Clarivent-250 5x1x10 Tablets.webp",
  "CLARIVENT-500 | 5x1x10 | Tablet": "Clarivent-500 5x1x10 Tablets.webp",
  "CLINDAROL-300 | 10x1x10 | Capsule": "Clindarol-300 10x1x10 Capsules.webp",
  "CLOBEVENT | 15gm | Ointement": "Clobevent 15gm Cream.webp",
  "CLOBEVENT GM LOTION | 25ml | Lotion": "Clobevent-GM Lotion 25ml.webp",
  "CLOBEVENT-GM | 15gm | Ointement": "Clobevent 15gm Cream.webp",
  "CLOBEVENT-S | 20gm | Ointement": "Clobevent-S 20gm Cream.webp",
  "COLIGUT-200 | 10x1x10 | Tablet": "Coligut-200 10x1x10 Tablets.webp",
  "COLIGUT-400 | 10x1x10 | Tablet": "Coligut-400 10x1x10 Tablets.webp",
  "COLIGUT-550 | 10x1x10 | Tablet": "Coligut-550 10x1x10 Tablets.webp",
  "COLIGUT-L | 30ml | Dry Syrup": "Coligut-L Dry Syrup 30ml.webp",
  "COLIGUT-L | 1g | Sachet": "Coligut L 50x1g Sachet.webp",
  "COLIGUT-L | 10x10 | Capsule": "Coligut-L Capsule 10x1x10.webp",
  "COLIVENT | 30ml | Drop": "Colivent 30ml Drop.webp",
  "COLIVENT | 60ml | Syrup": "Colivent 60ml Syrup.webp",
  "CORIVENT-EX | 100ml | Syrup": "Corivent-Ex 100ml Syrup.webp",
  "CORTIDRON-100 | 5ml | Injection": "Cortidron 100mg injection.webp",
  "DAOPHAGE-G1 | 10x2x15 | Tablet": "Daophage-G1 10x2x15 Tab.webp",
  "DAOPHAGE-SR 500 | 10x2x10 | Tablet": "Daophage-500 SR 10x2x10 Tablets.webp",
  "DAOPHAGE-G 0.5 | 10x15 | Tablet": "Daophage-G 0.5 10x15 Tablets.webp",
  "DAOPHAGE-G1 FORTE | 10x15 | Tablet": "Daophage-G1-Forte 10x15 Tablets.webp",
  "DAOPHAGE-G2 | 10x2x15 | Tablet": "Daophage-G2 10x2x15 Tablets.webp",
  "DAOPHAGE-G2 FORTE | 10x15 | Tablet": "Daophage-G2 Forte 10x15 Tablets.webp",
  "DAOPHAGE-GP1 | 10x2x15 | Tablet": "Daophage-Gp1 10x2x15 Tablets.webp",
  "DAOPHAGE-GP2 | 10x2x15 | Tablet": "Daophage-Gp2 10x2x15 Tablets.webp",
  "DAOZIDE-M | 10x2x10 | Tablet": "Daozide-M 10x2x10 Tablets.webp",
  "DAPALIFT-10 | 10x1x10 | Tablet": "Dapalift-10 10x1x10 Tablets.webp",
  "DAPALIFT-M 10/1000 | 10x10 | Tablet": "Dapalift-M 1000-10x10 Tablets.webp",
  "DAPALIFT-M 10/500 | 10x10 | Tablet": "Dapalift-M 500 10x10 Tablets.webp",
  "DAPALIFT-V | 10x1x10 | Tablet": "Dapalift-V 10x1x10 Tablets.webp",
  "DECACORTIL-6 | 20x10 | Tablet": "Decacortil-6 20x10 Tablets.webp",
  "DERMOVENT FP | 10x2x10 | Tablet": "Dermovent-FP 10x2x10 Tablets.webp",
  "DERMOVENT-5 | 15gm | Ointement": "Dermovent-5 15gm Cream.webp",
  "DERMOVENT-500 | 10x10 | Tablet": "Dermovent-500 10x10 Tablets.webp",
  "DILUSTONE | 1x30 | Capsule": "Dilustone 30 N Capsules.webp",
  "DILUSTONE 1B6 | 200ml | Syrup": "Dilustone Syrup 200ml.webp",
  "DOLORIDE COLD | 80x10 | Tablet": "Doloride-Cold Plastic 80x10 Tablets.webp",
  "DOLORIDE-CHYMO | 20x10 | Tablet": "Doloride-Chymo 20x10 Tablets.webp",
  "DOLORIDE-MR | 10x10 | Tablet": "Doloride-Mr 10x10 Tablets.webp",
  "DOLORIDE-P | 10x2x15 | Tablet": "Doloride-P 10x2x15 Tablets.webp",
  "DOLORIDE-P | 20x10 | Tablet": "Doloride-Chymo 20x10 Tablets.webp",
  "DOLORIDE-P | 10x2x10 | Tablet": "Doloride-P 10x2x10 Tablets.webp",
  "DOLORIDE-SP | 20x10 | Tablet": "Doloride-Sp 20x10 Tablets.webp",
  "DOLORIDE-TH4 | 10x1x10 | Tablet": "Doloride-Th4 10x1x10 Tablets.webp",
  "DOLORIDE-TH8 | 10x1x10 | Tablet": "Doloride-Th8 10x1x10 Tablets.webp",
  "DOLOSAID 200 SR | 20x10 | Tablet": "Dolosaid 200SR-20x10 Tab.webp",
  "DOLOSAID P | 30x10 | Tablet": "Dolosaid-P 30x10 Tablets.webp",
  "DOLOSAID RAB SR | 10x1x10 | Capsule": "Dolosaid-RAB SR 10x1x10 Capsules.webp",
  "DOLOSAID -TP 8 | 10x1x10 | Tablet": "Dolosaid -Tp 8 10x1x10 Tablets.webp",
  "DOLOSAID-100 | 20x10 | Tablet": "Dolosaid 100mg 20x10 Tab.webp",
  "DOLOSAID-MR  NEW PACK | 20x10 | Tablet": "Dolosaid 100mg 20x10 Tab.webp",
  "DOLOSAID-SP | 20x10 | Tablet": "Dolosaid-Sp 20x10 Tablets.webp",
  "DOLOSAID-SPAS | 20x10 | Tablet": "Dolosaid-Spas 20x10 Tablets.webp",
  "DOLOSAID-TP4 | 10x1x10 | Tablet": "Dolosaid-Tp4 10x1x10 Tablets.webp",
  "DOLOVENT-DT | 10x2x10 | Tablet": "Dolovent-Dt 10x2x10 Tablets.webp",
  "DONACORTIL-30 | 10x1x10 | Tablet": "Donacortil-30 10x1x10 Tablets.webp",
  "DONACORTIL-6 | 30ml | Syrup": "Donacortil-6 30ml Syrup.webp",
  "DONACORTIL-6 | 10x1x10 | Tablet": "Donacortil-6 10x1x10 Tablets.webp",
  "DONACORTIL-TM | 10x1x10 | Capsule": "Donacortil-Tm 10x1x10 Capsules.webp",
  "DOXIMYCIN | 20x10 | Tablet": "Doximycin 20x10 Tablets.webp",
  "DOXIVENT-LB | 20x10 | Capsule": "Doxivent-Lb 20x10 Capsules.webp",
  "DUOPRESS-FM | 10x10 | Tablet": "Duopress-Fm 10x10 Tablets.webp",
  "DUOSMA-3 | 10x5x3ml | Respules": "Duosma-3 10x5x3ml Respules.webp",
  "DUOSMA-LD | 10x5x2.5ml | Respules": "Duosma-Ld 10x5x2.5ml Respules.webp",
  "DYDROBENZ 10 | 10x1x10 | Tablet": "DydroBenz-10x1x10 Tablets.webp",
  "EMIVENT MD | 20x10 | Tablet": "EmiventM-DT-20x10 Tablets.webp",
  "ENTEROBIOZ | 5ml | Respules": "Enterobioz 5ml Respules.webp",
  "ENZOVENT | 10x1x10 | Tablet": "Enzovent 10x1x10 Tablets.webp",
  "ENZOVENT PLUS | 10x1x10 | Tablet": "Enzovent-Plus 10x1x10 Tablets.webp",
  "EPILEVITRA-1000 | 10X10 | Tablet": "Epilevitra-1000 10X10 Tablets.webp",
  "EPILEVITRA-250 | 10X10 | Tablet": "Epilevitra-250 10X10 Tablets.webp",
  "EPILEVITRA-500 | 20x10 | Tablet": "Epilevitra-500 20x10 Tablets.webp",
  "EPILEVITRA-750 | 10X10 | Tablet": "Epilevitra-750 10X10 Tablets.webp",
  "ESOVENT-DSR | 10x1x10 | Capsule": "Esovent DSR Capsules 10x1x10.webp",
  "ESOVENT-IT | 10x10 | Capsule": "Esovent IT 10x10 Tablets.webp",
  "ESOVENT-LSR | 10x1x10 | Capsule": "Esovent-Lsr 10x1x10 Capsules.webp",
  "FAROGARD | 30ml | Syrup": "Farogard 30ml Syrup.webp",
  "FAROGARD 200 | 10x1x10 | Tablet": "FAROGARD-200 10x1x10 Tablet.webp",
  "FAROGARD 300 | 10x1x10 | Tablet": "Farogard-300 10x1x10 Tablets.webp",
  "FEBUROL-40 | 10x1x10 | Tablet": "Feburol-40 10x1x10 Tablets.webp",
  "FEBUROL-80 | 10x1x10 | Tablet": "Feburol-80 10x1x10 Tablets.webp",
  "FEPADOL KID | 15ml | Drop": "Fepadol-Kid Drops 15ml.webp",
  "FEPADOL-120 | 60ml | Syrup": "Fepadol-120 60ml Syrup.webp",
  "FEPADOL-240 | 60ml | Syrup": "Fepadol-240 60ml Syrup.webp",
  "FEPADOL-250 | 60ml | Syrup": "Fepadol-250 60ml Syrup.webp",
  "FEPADOL-500 | 50x10 | Tablet": "Fepadol-500 50x10 Tablets.webp",
  "FEPADOL-650 | 10x2x15 | Tablet": "Fepadol-650 10x2x15 Tablets.webp",
  "FEPASULIDE P | 25x2x10 | Tablet": "Fepasulide-P 25x2x10 Tablets.webp",
  "FERIMINTA PLUS | 225ml | Syrup": "Feriminta-PLUS 225ml Syrup.webp",
  "FERIMINTA PLUS | 450ml | Syrup": "Feriminta-PLUS 450ml Syrup.webp",
  "FERIVENT | 5ml | Injection": "Ferivent 5ml Injection.webp",
  "FERIVENT-XT | 150ml | Syrup": "Ferivent-Xt 150ml Syrup.webp",
  "FERIVENT-XT | 10x1x10 | Tablet": "Ferivent-Xt 10x1x10 Tablets.webp",
  "FERIVENT-Z | 10x2x15 | Capsule": "Ferivent-Z 10x2x15 Capsules.webp",
  "FERTIVENT F | 10x10 | Tablet": "Fertivent-F 10x1x10 Tablets.webp",
  "FERTIVENT M | 10x10 | Tablet": "Fertivent-M 10x1x10 Tablets.webp",
  "FLUCOVENT 200 | 40x1 | Tablet": "Flucovent-200 2x1 Tablet 40x2x1.webp",
  "FLUCOVENT-150 | 40x2x1 | Tablet": "Flucovent-150 40x2x1 Tablets.webp",
  "FLUPRESS-20 | 10x2x15caps | Capsule": "Flupress-20 10x2x15caps Capsules.webp",
  "FLUTIGRA | 120m | Spray": "Flutigra 120m Spray.webp",
  "FLUTIGRA AZ | 120m | Spray": "Flutigra-AZ nasal spary 7ml.webp",
  "FOLIRIDE | 10x1x30 | Tablet": "Foliride 10x1x30 Tablets.webp",
  "FOLIRIDE GOLD | 10x1x10 | Tablet": "Foliride-GOLD 10x1x10 Tablets.webp",
  "GABAVENT | 30gm | Ointement": "Gabavent 30gm Cream.webp",
  "GABAVENT NT 400 | 20x10 | Tablet": "Gabavent-NT 400 20x10 Tablets.webp",
  "GABAVENT-100 | 10x10 | Tablet": "Gabavent-100 10x10 Tablets.webp",
  "GABAVENT-300 | 10x10 | Capsule": "Gabavent-300 10x10 Capsules.webp",
  "GABAVENT-M 100 | 10x10 | Tablet": "Gabavent-M 100 10x10 Tablets.webp",
  "GABAVENT-M 300 | 10x1x10 | Tablet": "Gabavent-M 300 10x1x10 Tablets.webp",
  "GABAVENT-NT 100 | 10x15 | Tablet": "Gabavent-Nt 100 10x15 Tablets.webp",
  "GABAVENT-NT 300 | 10x1x10 | Tablet": "Gabavent-M 300 10x1x10 Tablets.webp",
  "GALVENT-50 | 10x15 | Tablet": "Galvent-50 10x15 Tablets.webp",
  "GALVENT-M 1000 | 10x15 | Tablet": "Galvent-M 1000 10x15 Tablets.webp",
  "GALVENT-M 500 | 10x15 | Tablet": "Galvent-M 500 10x15 Tablets.webp",
  "GASFIZ MINT FLAVOUR | 170ml | Syrup": "Gasfiz Raft 150ml Syrup.webp",
  "GASFIZ PAAN FLAVOUR | 170ml | Syrup": "Gasfiz Raft 150ml Syrup.webp",
  "GASFIZ RAFT | 150ml | Syrup": "Gasfiz Raft 150ml Syrup.webp",
  "GASTOVENT-DSR | 20x10 | Capsule": "Gastovent-Dsr 20x10 Capsules.webp",
  "GASTOVENT-LSR | 10x1x10 | Capsule": "Gastovent-Lsr 10x1x10 Capsules.webp",
  "GLYCOLIUM | 10x5x2ml | Respules": "Glycolium 10x5x2ml Respules.webp",
  "HEALODINE | 10gm | Powder": "Healodine Powder 10g.webp",
  "HEALODINE | 100ml | Gargle": "Healodine 100ml Gargles.webp",
  "HEALODINE | 15gm | Ointement": "Healodine-Oz 15gm Cream.webp",
  "HEALODINE 10% | 100ml | Solution": "Healodine Solution 100ml 10%.webp",
  "HEALODINE 5% SOLUTION | 500ml | Solution": "Healodine Solution 500ml.webp",
  "HEALODINE-OZ | 15gm | Ointement": "Healodine-Oz 15gm Cream.webp",
  "HISTAREX | 100ml | Syrup": "Histarex 100ml Syrup.webp",
  "HISTAREX-10 | 20x15 | Tablet": "Histarex-10 20x15 Tablets.webp",
  "HISTAREX-25 | 20x15 | Tablet": "Histarex-25 20x15 Tablets.webp",
  "HISTIGRA-120 | 10x1x10 | Tablet": "Histigra-120 10x1x10 Tablets.webp",
  "HISTIGRA-180 | 10x1x10 | Tablet": "Histigra-180 10x1x10 Tablets.webp",
  "HISTIGRA-M | 10x1x10 | Tablet": "Histigra-M 10x1x10 Tablets.webp",
  "HONIRYL | 100ml | Syrup": "Honiryl 100ml Syrup.webp",
  "IBUVENT-PLUS | 100ml | Syrup": "Ibuvent-Plus 100ml Syrup.webp",
  "IBUVENT-PLUS | 60ml | Syrup": "Ibuvent-Plus 60ml Syrup.webp",
  "IBUVENT-PLUS | 20x10 | Tablet": "Ibuvent-Plus 20x10 Tablets.webp",
  "INDOVENT-25 | 20x10 | Capsule": "Indovent-25 20x10 Capsules.webp",
  "INDOVENT-SR | 20x10 | Capsule": "Indovent-Sr 20x10 Capsules.webp",
  "INSTA PLAY | 48x1x3n | Condom": "Insta Play 48x1x3n Condom.webp",
  "ITROMAX OC | 15gm | Ointement": "Itromax-OC 15gm Cream.webp",
  "ITROMAX SB 130 | 10x1x10 | Capsule": "Itromax-SB-130mg 10x1x10 Capsules.webp",
  "ITROMAX SB 65 | 10x1x10 | Capsule": "Itromax-SB-65mg 10x1x10 Capsules.webp",
  "ITROMAX-100 | 10x1x10 | Capsule": "Itromax-100 10x1x10 Capsules.webp",
  "ITROMAX-200 | 10x1x10 | Capsule": "Itromax-200 10x1x10 Capsules.webp",
  "KETOJET | 110ml | Shampoo": "Ketojet Shampoo 110ml.webp",
  "KETOJET CT | 75gm | Soap": "Ketojet-CT 75g Soap.webp",
  "KETOJET-200 | 10x1x10 | Tablet": "KETOJET-200 1x10 Tablet.webp",
  "KETORIDE-DT | 20x15 | Tablet": "Ketoride-Dt 20x15 Tablets.webp",
  "KNEE GUARD | 10x10 | Tablet": "Knee Guard 10x10 Tablets.webp",
  "KNEEGUARD | 10x5gm | Sachet": "Kneeguard Sachet 10x5g.webp",
  "KNEEGUARD PLUS | 10x1x10 | Softgel": "Kneeguard plus 10x1x10 Softgel Capsules.webp",
  "LACTUROL | 100ml | Syrup": "Lacturol 100ml Syrup.webp",
  "LACTUROL | 170ml | Syrup": "Lacturol 170ml Syrup.webp",
  "LANSOUP-15 JUNIOR | 10x10 | Tablet": "Lansoup-JUNIOR 15 10x10 Tablets.webp",
  "LAXIVENT | 170ml | Syrup": "Laxivent-Plus 170ml Syrup.webp",
  "LAXIVENT | 100gm | Powder": "Laxivent 100gm Powder.webp",
  "LAXIVENT | 4x5x10 | Tablet": "Laxivent 4x5x10 Tablets.webp",
  "LAXIVENT-PLUS | 170ml | Syrup": "Laxivent-Plus 170ml Syrup.webp",
  "LEVOBUTA 0.63 | 10x5x2.5ml | Respules": "Levobuta 0.63 10x5x2.5ml Respules.webp",
  "LEVOTRAMINE | 30ml | Syrup": "Levotramine-Syrup 30ml.webp",
  "LEVOTRAMINE-10 | 20x10 | Tablet": "Levotramine-10 20x10 Tablets.webp",
  "LEVOTRAMINE-5 | 20x10 | Tablet": "Levotramine-5 20x10 Tablets.webp",
  "LINAGLYS-5 | 10x10 | Tablet": "Linaglys-5 10x10 Tablets.webp",
  "LINAGLYS-M 2.5/500 | 10x10 | Tablet": "Linaglys-M 2-5-500 10x10 Tablets.webp",
  "LIPIVENT-10 | 10x10 | Tablet": "Lipivent-10 10x10 Tablets.webp",
  "LIPIVENT-20 | 10x10 | Tablet": "Lipivent-20 10x10 Tablets.webp",
  "LIPIVENT-40 | 10x10 | Tablet": "Lipivent-40 10x10 Tablets.webp",
  "LIPIVENT-F 10 | 10x1x10 | Tablet": "Lipivent-F 10x1x10 Tablets.webp",
  "LIPIVENT-GOLD 10 | 10x15 | Capsule": "Lipivent-Gold 10 10x15 Capsules.webp",
  "LIPIVENT-GOLD 20 | 10x15 | Capsule": "Lipivent-Gold 20 10x15 Capsules.webp",
  "LIVOMINTA | 10x10 | Tablet": "Livominta 10x10 Tablets.webp",
  "LIVOMINTA | 200ml | Syrup": "Livominta 200ml Syrup.webp",
  "LIVOMINTA SL | 10x1x10 | Softgel": "LIVOMINTA-SL 10x1x10 Softgel Capsules.webp",
  "LIVOMINTA-FORTE | 200ml | Syrup": "Livominta-Forte 200ml Syrup.webp",
  "LIZUBIOTIC-600 | 10x1x10 | Tablet": "LIZUBIOTIC 600 10x1x10 Tablets.webp",
  "LODICAINE | 30gm | Ointement": "Lodicaine 30gm Cream.webp",
  "LOSARIDE-H | 20x10 | Tablet": "Losaride-H 20x10 Tablets.webp",
  "LOXAQUIN-250 | 10x1x10 | Tablet": "Loxaquin-250 10x1x10 Tablets.webp",
  "LOXAQUIN-500 | 10x1x10 | Tablet": "Loxaquin-500 10x1x10 Tablets.webp",
  "LOXAQUIN-OZ | 10x1x10 | Tablet": "Loxaquin-Oz 10x1x10 Tablets.webp",
  "LULINAZ | 10gm | Ointement": "Lulinaz 10gm Cream.webp",
  "LULINAZ | 20gm | Ointement": "Lulinaz 20gm Cream.webp",
  "LULINAZ | 30gm | Ointement": "Lulinaz 30gm Cream.webp",
  "LULINAZ | 30ml | Lotion": "Lulinaz 30ml Lotion.webp",
  "LULINAZ 4D | 20gm | Ointement": "Lulinaz- 4D 20gm Cream.webp",
  "LUMIART | 10x1x6 | Tablet": "Lumiart 10x1x6 Tablets.webp",
  "LYCORIDE | 10x1x10 | Softgel": "Lycoride 10x1x10 Softgel Capsules.webp",
  "LYCORIDE | 225ml | Syrup": "Lycoride 225ml Syrup.webp",
  "MEFTADOL-P | 60ml | Syrup": "Meftadol-P 60ml Syrup.webp",
  "MEFTADOL-P FORTE | 60ml | Syrup": "Meftadol-P Forte 60ml Suspension.webp",
  "MEFTADOL-P FORTE | 20x10 | Tablet": "Meftadol-P Forte 20x10 Tablets.webp",
  "MEFTADOL-SPAS | 30x10 | Tablet": "Meftadol-Spas 30x10 Tablets.webp",
  "MEFTADOL-SPAS DS | 20x10 | Tablet": "Meftadol-Spas DS 20x10 Tablets.webp",
  "MENSTAROL | 200ml | Syrup": "Menstarol 200ml Syrup.webp",
  "MERORIDE-1000 | 20ml | Injection": "Meroride 1000 INJECTION.webp",
  "METAXADOL-D | 10x10 | Tablet": "Metaxadol-D 10x10 Tablets.webp",
  "METHOCORT | 2ml | Injection": "Methocort 2ml Injection 02.webp",
  "METHOCORT 40 | 40mg | Injection": "Methocort 40 40mg Injection.webp",
  "METHOCORT-16 | 20x10 | Tablet": "Methocort-16 20x10 Tablets.webp",
  "METHOCORT-4 | 20x10 | Tablet": "Methocort-4 20x10 Tablets.webp",
  "METHOCORT-8 | 20x10 | Tablet": "Methocort-8 20x10 Tablets.webp",
  "METOVENT-25 XL | 20x10 | Tablet": "Metovent 25XL 20x10 Tablets.webp",
  "METOVENT-50 XL | 20x10 | Tablet": "Metovent 50XL 20x10 Tablets.webp",
  "MIGRAVENT | 20x10 | Tablet": "Migravent 20x10 Tablets.webp",
  "MIKAROL-500 | 40x2ml | Injection": "Mikarol-500 40x2ml Injection.webp",
  "MONTIRIDE-AB | 10x10 | Tablet": "Montiride-Ab 10x10 Tablets.webp",
  "MONTIRIDE-LA | 10x1x10 | Tablet": "Montiride-La 10x1x10 Tablets.webp",
  "MONTIRIDE-LC | 20x10 | Tablet": "Montirided-LC 20x10 Tablets.webp",
  "MOXILANTA 250 | 10x3x10 | Capsule": "Moxilanta-250 10x3x10  Capsules.webp",
  "MOXILANTA 500 | 10x2x10 | Capsule": "Moxilanta-500 10x3x10  Capsules.webp",
  "MOXILANTA-CV 625 | 10x1x10 | Tablet": "Moxilanta-CV 625 10x1x10 Tablets.webp",
  "MOXILET-400 | 10x1x5 | Tablet": "Moxilet 400 10x1x5 Tablets.webp",
  "MUCOXIT-AB | 10x10 | Tablet": "Mucoxit-Ab 10x10 Tablets.webp",
  "MUPIVENT | 15gm | Ointement": "Mupivent 15gm Cream.webp",
  "MUPIVENT | 5gm | Ointement": "Mupivent 15gm Cream.webp",
  "MYLABION | 10x1x10 | Capsule": "Mylabion 10x1x10 Capsules.webp",
  "MYLABION | 200ml | Syrup": "Mylabion 200ml Syrup.webp",
  "MYLABION-1500 | 10x5x2ml | Injection": "Mylabion-1500 10x5x2ml Injection.webp",
  "MYLABION-D3 FORTE | 10x1x10 | Tablet": "Mylabion D3 Forte 1x10 Tablets.webp",
  "MYLABION-LC | 10x1x10 | Tablet": "Mylabion LC 10x1x10 Tablets.webp",
  "MYLABION-PLUS | 2ml | Injection": "Mylabion-Plus 2ml Injection.webp",
  "MYLABION-PLUS | 5x1x10 | Capsule": "Mylabion-Plus 5x1x10 Capsules.webp",
  "NAPROMAX 250 | 10x15 | Tablet": "Napromax 250 10x15 Tablets.webp",
  "NAPROMAX 500 | 10x2x10 | Tablet": "Napromax 500 10x2x10 Tablets.webp",
  "NAPROMAX-D | 10x10 | Tablet": "Napromax-D 10x10 Tablets.webp",
  "NAUSINATE | 10x1x30 | Tablet": "Nausinate 10x1x30 Tablets.webp",
  "NAUSINATE-PLUS | 10x1x30 | Tablet": "Nausinate-Plus 10x1x30 Tablets.webp",
  "NECADEC-50 | 1ml | Injection": "Necadec-50 1ml Injection.webp",
  "NEW MONTIRIDE-FXA | 10x1x10 | Tablet": "NEW Montiride FXA Tablets 10X1X10.webp",
  "NIMUVENT COLD | 25x2x10 | Tablet": "Nimuvent-COLD 25x2x10 Tablets.webp",
  "NIMUVENT-MD | 30x10 | Tablet": "Nimuvent-Md 30x10 Tablets.webp",
  "NIMUVENT-P | 25x2x10 | Tablet": "Nimuvent-COLD 25x2x10 Tablets.webp",
  "NIMUVENT-P | 10x2x10 | Tablet": "Nimuvent-P 10x2x10 Tablets.webp",
  "NIMUVENT-P | 30x2x10 | Tablet": "Nimuvent-P 30x2x10 Tablets.webp",
  "NODIGYL 400 | 10x2x15 | Tablet": "Nodigyl-400 10x2x15 Tablets.webp",
  "NODIGYL DG | 20g | Ointement": "Nodigyl Dg 20g Cream.webp",
  "OFTIDERM-RF | 15gm | Ointement": "Oftiderm-Rf 15gm Cream.webp",
  "OFTIROL OH | 20x10 | Tablet": "Oftirol-OH Tablets 20x10.webp",
  "OFTIROL-200 | 20x10 | Tablet": "Oftirol-200 20x10 Tablets.webp",
  "OFTIROL-200 TAB | 30x10 | Tablet": "Oftirol-200 30x10 Tablets.webp",
  "OFTIROL-M | 30ml | Syrup": "Oftirol-M 30ml Syrup.webp",
  "OFTIROL-M | 60ml | Syrup": "Oftirol-M 60ml Syrup.webp",
  "OFTIVENT | 60ml | Syrup": "Oftivent 60ml Syrup.webp",
  "OFTIVENT-200 | 20x10 | Tablet": "Oftivent-200 20x10 Tablets.webp",
  "OFTIVENT-M | 30ml | Syrup": "Oftivent-M 30ml Syrup.webp",
  "OFTIVENT-OZ | 20x10 | Tablet": "Oftivent-Oz 20x10 Tablets.webp",
  "OMEFIZ | 20x15 | Capsule": "Omefiz 20x15 Capsules.webp",
  "OMEFIZ-D | 20x15 | Capsule": "Omefiz-D 20x15 Capsules.webp",
  "OMIUP CAPS | 20x20 | Capsule": "Omiup 20x20 Capsules.webp",
  "OMIUP-D CAP | 20x20 | Capsule": "Omiup-D 20x20 Capsules.webp",
  "ONDILIUM | 30ml | Drop": "Ondilium 30ml Drop.webp",
  "ONDILIUM | 2ml | Injection": "Ondilium 2ml Injection.webp",
  "ONDILIUM MD 8 | 20x10 | Tablet": "Ondilium-MD 8 20x10 Tablets.webp",
  "ONDILIUM-MD | 20x10 | Tablet": "Ondilium-Md 20x10 Tablets.webp",
  "ORAVENT | 15gm | Ointement": "Oravent gel 25x1x15g Ointment.webp",
  "ORAVENT | 20x10 | Tablet": "Oravent 20x10 Tablets.webp",
  "ORAVENT-PLUS | 5gm | Ointement": "Oravent-Plus 5gm Cream.webp",
  "PANTORAZ-40 | 20x15 | Tablet": "Pantoraz-40 20x15 Tablets.webp",
  "PANTORAZ-D | 20x15 | Tablet": "Pantoraz-D 20x15 Tablets.webp",
  "PANTORAZ-DSR | 20x10 | Capsule": "Pantoraz DSR 20x10 Capsules.webp",
  "PANTOVENT | 10ml | Injection": "Pantovent 10ml Injection.webp",
  "PANTOVENT-40 | 20x10 | Tablet": "Pantovent-40 20x10 Tablets.webp",
  "PANTOVENT-D | 20x10 | Tablet": "Pantovent-D 20x10 Tablets.webp",
  "PANTOVENT-DSR | 20x10 | Capsule": "Pantovent-Dsr 20x10 Capsules.webp",
  "PANTOVENT-LSR | 10x1x10 | Capsule": "Pantovent-Lsr 10x1x10 Capsules.webp",
  "PHYLOBRON | 10x10 | Capsule": "Phylobron 10x10 Capsules.webp",
  "PHYLOBRON 200SR | 20x10 | Tablet": "Phylobron 200Sr 20x10 Tablets.webp",
  "PHYLOBRON-XT | 100ml | Syrup": "Phylobron-Xt 100ml Syrup.webp",
  "PICOVENT-LAXATIVE | 100ml | Syrup": "Picovent Syrup 100ml.webp",
  "PIPTAVENT-4.5 | 20ml | Injection": "Piptavent 4-5g Injection.webp",
  "PREGAVENT-75 | 10x10 | Capsule": "Pregavent 75mg 10x10 Capsules.webp",
  "PREGAVENT-D 75/20 | 10x10 | Capsule": "Pregavent-D 75-20 10x10 Capsules.webp",
  "PREGAVENT-ET | 20x10 | Tablet": "Pregavent-Et 20x10 Tablets.webp",
  "PREGAVENT-M | 10x1x10 | Capsule": "Pregavent-M 10x1x10 Capsules.webp",
  "PREGAVENT-M 1500 | 10x1x10 | Tablet": "Pregavent-M 1500 10x1x10 Tablets.webp",
  "PREGAVENT-NT | 10x1x10 | Tablet": "Pregavent-M 1500 10x1x10 Tablets.webp",
  "PREGAVENT-NTM | 10x1x10 | Tablet": "Pregavent-Ntm 10x1x10 Tablets.webp",
  "PRIMOVENT-CR | 10x10 | Tablet": "Primovent-Cr 10x10 Tablets.webp",
  "PRIMOVENT-N | 4x5x10 | Tablet": "Primovent-N 4x5x10 Tablets.webp",
  "PRODITIL | 10ml | Drop": "Proditil Drops 10ml.webp",
  "PRODITIL CV 100/62.5 | 30ml | Dry Syrup": "Proditil CV 100+62.5 10x1x10 Dry Syrup.webp",
  "PRODITIL-100 | 30ml | Dry Syrup": "Proditil-100 30ml Dry Syrup.webp",
  "PRODITIL-100 | 10x1x10 | Tablet": "Proditil CV 100+62.5 10x1x10 Tablets.webp",
  "PRODITIL-200 | 10x1x10 | Tablet": "Proditil-200 10x1x10 Tablets.webp",
  "PRODITIL-50 | 30ml | Dry Syrup": "Proditil-50 30ml Dry Syrup.webp",
  "PRODITIL-CV | 30ml | Dry Syrup": "Proditil-CV Dry Syrup 30ml.webp",
  "PRODITIL-CV 325 | 10x1x6 | Tablet": "Proditil-CV 325 10x1x6 Tablets.webp",
  "PRODITIL-PLUS | 5x1x10 | Tablet": "Proditil-Plus 5x1x10 Tablets.webp",
  "PROTIMINTA | 200gm | Powder": "Protiminta 200gm Powder.webp",
  "PROTIMINTA (AMERICAN ICECREAM) | 200gm | Powder": "Protiminta 200gm Powder.webp",
  "PROTIMINTA (KESAR-PISTA) | 200gm | Powder": "Protiminta 200gm Powder.webp",
  "PROTIMINTA DHA | 200gm | Powder": "Protiminta Dha 200gm Powder.webp",
  "QTVENT-25 | 5x2x10 | Tablet": "Qtvent-25 5x2x10 Tablets.webp",
  "QTVENT-50 | 5x2x10 | Tablet": "Qtvent-50 5x2x10 Tablets.webp",
  "RABIUP-DSR | 20x10 | Capsule": "Rabiup-Dsr 20x10 Capsules.webp",
  "RANILIUM | 10x5x2ml | Injection": "Ranilium 50mg 10x5x2 Injection.webp",
  "RANILIUM SPAS | 20x10 | Tablet": "Ranilium Spas 20x10 Tablets.webp",
  "RANILIUM-150 | 20x30 | Tablet": "Ranilium-150 20x30 Tablets.webp",
  "RANILIUM-300 | 20x10 | Tablet": "Ranilium 300mg 20x10 Tablets.webp",
  "RANILIUM-D | 20x10 | Tablet": "Ranilium-D 20x10 Tablets.webp",
  "RANILIUM-MPS | 170ml | Syrup": "Ranilium-Mps 170ml Syrup.webp",
  "RANILIUM-O | 20x10 | Tablet": "Ranilium-O 20x10 Tablets.webp",
  "RANILIUM-O COMBI PACK | 2x2ml | Injection": "Ranilium-O Combipack Injection.webp",
  "RANILIUM-PD | 100ml | Syrup": "Ranilium-Pd 100ml Syrup.webp",
  "RANILIUM-SPAS | 30ml | Syrup": "Ranilium Spas Syrup 30ml.webp",
  "RAZODROT-40 | 10x15 | Tablet": "Razodrot-40 10x15 Tablets.webp",
  "RAZODROT--DS | 10x15 | Tablet": "Razodrot-DS 80mg 10x15 Tablets.webp",
  "RAZODROT-M | 20x10 | Tablet": "Razodrot-M 20x10 Tablets.webp",
  "RAZOSPAS-TX | 10x10 | Tablet": "Razospas-TX 10x10 Tablets.webp",
  "RAZOTRAN-500 | 10x10 | Tablet": "Razotran 500mg 10x10 Tablets.webp",
  "REJUVITAL | 20x1x10 | Softgel": "Rejuvital 20x1x10 Softgel Capsules.webp",
  "REJUVITAL MUSLI-GOLD | 10x1x10 | Softgel": "Rejuvital 20x1x10 Softgel Capsules.webp",
  "RIFAVENT 400 | 20x10 | Tablet": "Rifavent 400 20x10 Tablets.webp",
  "ROXIFIT-150 | 20x10 | Tablet": "Roxifit-150 20x10 Tablets.webp",
  "ROZUCARD-10 | 3x10 | Tablet": "Rozucard-10 3x10 Tablets.webp",
  "ROZUCARD-20 | 3x10 | Tablet": "Rozucard-20 3x10 Tablets.webp",
  "ROZUCARD-F | 10x1x10 | Tablet": "Rozucard-F 10x1x10 Tablets.webp",
  "ROZUCARD-GOLD 10 | 10x1x10 | Capsule": "Rozucard-Gold 10x1x10 Capsules.webp",
  "ROZUCARD-GOLD 20 | 10x1x10 | Capsule": "Rozucard-Gold-20 10x1x10 Capsules.webp",
  "RTQS-200 | 10x15 | Tablet": "Rtqs-200 10x15 Tablets.webp",
  "RTQS-TOFA | 20x10 | Tablet": "RTQS-TOFA 20x10 Tablets.webp",
  "RTRIT | 5ml | Injection": "Rtrit 5ml Injection.webp",
  "SCABITICK-VET | 75gm | Soap": "Scabitick-Vet 75gm Soap.webp",
  "SENSOVENT | 80gm | Toothpaste": "Sensovent-F 80gm Toothpaste.webp",
  "SENSOVENT MOUTHWASH | 100ml | Mouthwash": "Sensovent 100ml Mouthwash.webp",
  "SENSOVENT-F | 80gm | Toothpaste": "Sensovent-F 80gm Toothpaste.webp",
  "SERRAVENT D | 6x5x10 | Tablet": "Serravent-D 6x5x10 Tablets.webp",
  "SILDOSTAT-8 | 10x1x10 | Capsule": "Sildostat-8 10x1x10 Capsules.webp",
  "SILDOSTAT-D8 | 10x1x10 | Capsule": "Sildostat-D8 10x1x10 Capsules.webp",
  "SINOVENT | 10ml | Spray": "Sinovent 10ml Spray.webp",
  "SINOVENT | 60ml | Syrup": "Sinovent 60ml Syrup.webp",
  "SINOVENT | 30x10 | Tablet": "Sinovent 30x10 Tablets.webp",
  "SINOVENT SALINE | 20ml | Spray": "Sinovent-Saline Nasal Spray 20ml.webp",
  "SINOVENT-DM | 20x1x10 | Softgel": "Sinovent-Dm 20x1x10 Softgel Capsules.webp",
  "SINOVENT-DM | 100ml | Syrup": "Sinovent-Dm 100ml Syrup.webp",
  "SINOVENT-DM | 60ml | Syrup": "Sinovent-Dm 60ml Syrup.webp",
  "SINOVENT-DS | 60ml | Syrup": "Sinovent-DS 60ML Syrup.webp",
  "SINOVENT-FORTE | 25x2x10 | Tablet": "Sinovent Forte 25x2x10 Tablets.webp",
  "SINOVENT-VAPOR | 20x10 | Softgel": "Sinovent Vapor 20x10 Capsules.webp",
  "SITAGLYS - D | 10x1x10 | Tablet": "Sitaglys - D 10x1x10 Tablets.webp",
  "SITAGLYS 100 | 4x7 | Tablet": "Sitaglys-100mg 4x7 Tablets.webp",
  "SITAGLYS 50 | 4x7 | Tablet": "Sitaglys-50mg 4x7 Tablets.webp",
  "SITAGLYS DM | 10x10 | Tablet": "Sitaglys-DM 100-10-1000 10x10 Tablets.webp",
  "SITAGLYS M  50/1000 | 2x15 | Tablet": "Sitaglys-M-50-1000 2x15 Tablets.webp",
  "SITAGLYS M  50/500 | 2x15 | Tablet": "Sitaglys-M-50-500 2x15 Tablets.webp",
  "SKIN-BLOOM | 15gm | Ointement": "Skinbloom 24x1x15gm Cream.webp",
  "SOFEGEST 200 | 10x1x10 | Softgel": "Sofegest 200 10x1x10 Softgel Capsules.webp",
  "SORAVENT 6 | 30gm | Ointement": "SORAVENT-6 12x30g Ointment.webp",
  "SPASMOVENT | 6x5x10 | Tablet": "Spasmovent 6x5x10 Tablets.webp",
  "SPASMOVENT | 60ml | Syrup": "Spasmovent 60ml Syrup.webp",
  "SPORIVENT-125 | 20x10 | Tablet": "Sporivent-125 20x10 Tablets.webp",
  "SPORIVENT-250 | 20x10 | Capsule": "Sporivent-250 20x10 Capsules.webp",
  "SPORIVENT-250 | 20x10 | Tablet": "Sporivent-250 20x10 Tablets.webp",
  "SPORIVENT-500 | 20x10 | Capsule": "Sporivent-500 20x10 Capsules.webp",
  "TELIROL B-2.5 | 10x10 | Tablet": "Telirol-B 2.5 10x10 Tablets.webp",
  "TELIROL B-5 | 10x10 | Tablet": "Telirol-B 2.5 10x10 Tablets.webp",
  "TELIROL CT 40/12.5 | 10x15 | Tablet": "Telirol-CT 40-12_5 10x15 Tablets.webp",
  "TELIROL TRIO 40 | 10x15 | Tablet": "Telirol Trio 40 10x15 Tablets.webp",
  "TELIROL-40 | 20x10 | Tablet": "Telirol-40 20x10 Tablets.webp",
  "TELIROL-AM | 20x10 | Tablet": "Telirol AM Tab  20x10.webp",
  "TELIROL-H | 10x15 | Tablet": "Telirol-H 10x15 Tablets.webp",
  "TENLIVENT-20 | 20x10 | Tablet": "Tenlivent-20 20x10 Tablets.webp",
  "TENLIVENT-M 1000 | 10x10 | Tablet": "Tenlivent-M 1000 10x10 Tablets.webp",
  "TENLIVENT-M 500 | 10x10 | Tablet": "Tenlivent-M 500 10x10 Tablets.webp",
  "TERBIRIDE | 15gm | Ointement": "Terbiride 250gm 10x1x7 Tablets.webp",
  "TERBIRIDE-250 | 10x1x7 | Tablet": "Terbiride 250gm 10x1x7 Tablets.webp",
  "TERBIRIDE-500 | 10x1x7 | Tablet": "Terbiride 500mg 10x1x7 Tablets.webp",
  "TIZAMAX-MR | 10x2x10 | Tablet": "Tizamax-MR 10x2x10 Tablets.webp",
  "TORIGESIC PLUS | 20x10 | Tablet": "Torigesic-Plus 20x10 Tablets.webp",
  "TORIGESIC-120 | 20x10 | Tablet": "Torigesic 120mg 20x10 Tablets.webp",
  "TORIGESIC-60 | 20x10 | Tablet": "Torigesic 60mg 20x10 Tablets.webp",
  "TORIGESIC-90 | 20x10 | Tablet": "Torigesic 90mg 20x10 Tablets.webp",
  "TORIGESIC-TH4 | 10x1x10 | Tablet": "Torigesic TH4 10x1x10 Tablets.webp",
  "TORIGESIC-TH8 | 10x1x10 | Tablet": "Torigesic TH8 10x1x10 Tablets.webp",
  "TORSEVENT-10 | 4x5x10 | Tablet": "Torsevent 10mg 4x5x10 Tablets.webp",
  "TORSEVENT-20 | 4x5x10 | Tablet": "Torsevent 20mg 4x5x10 Tablets.webp",
  "TORSEVENT-PLUS | 10x15 | Tablet": "Torsevent-Plus 10x15 Tablets.webp",
  "TRIZACET | 40x15 | Tablet": "Trizacet 40x15 Tablets.webp",
  "TRIZACET | 60ml | Syrup": "Trizacet 60ml Syrup.webp",
  "TRIZACET COLD DS RF | 60ml | Syrup": "Trizacet 60ml Syrup.webp",
  "TRIZACET COLD RF | 60ml | Syrup": "Trizacet Cold RF Syrup 60ml.webp",
  "TRIZACET-COLD RF | 25x10 | Tablet": "Trizacet Cold RF Syrup 60ml.webp",
  "TUSSTON | 35x10 | Lozenges": "Tusston 35x10 Lozenges.webp",
  "TUSSTON DX | 100ml | Syrup": "Tusston DX Syrup 100ml.webp",
  "TUSSTON SUPER | 100ml | Syrup": "Tusston-Super 100 ml Syrup.webp",
  "TUSSTON SUPER | 60ml | Syrup": "Tusston-Super 60 ml Syrup.webp",
  "TUSSTON SUPER-NF | 20x10 | Tablet": "Tusston Super-NF 20x10 Tablets.webp",
  "TUSSTON-L | 100ml | Syrup": "Tusston DX Syrup 100ml.webp",
  "UDIVENT | 100ml | Syrup": "Udivent Suspension 100ml.webp",
  "UDIVENT-150 | 10x1x10 | Tablet": "Udivent-150 10x1x10 Tablets.webp",
  "UDIVENT-300 | 10x1x10 | Tablet": "Udivent-300 Tablet.webp",
  "ULTAVIR | 30ml | Syrup": "Ultavir 30ml Syrup.webp",
  "URIRIDE 0.4 | 10x20 | Capsule": "Uriride-0-4mg 10x20 Capsules.webp",
  "URIRIDE-D | 10x1x15 | Capsule": "Uriride-D 10x1x15 Capsules.webp",
  "UTIQUIN-400 | 20x10 | Tablet": "Utiquin-400 20x10 Tablets.webp",
  "UTIQUIN-HTZ | 10x4x10 | Tablet": "Utiquin-H TZ 10x4x10 Tablets.webp",
  "UTIQUIN-TZ | 10x4x10 | Tablet": "Utiquin-H TZ 10x4x10 Tablets.webp",
  "UTISPAS | 10x15 | Tablet": "Utispas 10x15 Tablets.webp",
  "VENTIMOX | 60ml | Dry Syrup": "Ventimox 60ml Dry Syrup.webp",
  "VENTIMOX 150mg | 60ml | Dry Syrup": "Ventimox 60ml Dry Syrup.webp",
  "VENTIMOX PLUS KID TAB | 20x10 | Tablet": "Ventimox Plus KID 20x10 Tablets.webp",
  "VENTIMOX PLUS LB  (SKY BLUE/WHITE) | 10x2x10 | Capsule": "VENTIMOX PLUS LB (Blue-Grey) 10x2x10 Capsule.webp",
  "VENTIMOX PLUS LB (Blue/Grey) | 10x2x10 | Capsule": "VENTIMOX PLUS LB (Blue-Grey) 10x2x10 Capsule.webp",
  "VENTIMOX-125 DT | 20x10 | Tablet": "Ventimox-125 DT 20x10 Tablets.webp",
  "VENTIMOX-250  (R/W) | 10x3x10 | Capsule": "Ventimox-250mg 10x3x10 Capsules (red white).webp",
  "VENTIMOX-250  (YELLOW/GREY) | 10x3x10 | Capsule": "Ventimox-250mg 10x3x10 Capsules (red white).webp",
  "VENTIMOX-250 DT | 20x10 | Tablet": "Ventimox-250 DT 20x10 Tablets.webp",
  "VENTIMOX-500  (ORANGE/ORANGE) | 10x2x10 | Capsule": "Ventimox-500 10x2x10 Capsules ORANGE.webp",
  "VENTIMOX-500  (Y/Y) | 10x2x10 | Capsule": "Ventimox-500 10x2x10 Capsules ORANGE.webp",
  "VENTIMOX-CV | 10ml | Drop": "Ventimox CV 2.2gm 10ml Drops.webp",
  "VENTIMOX-CV 1.2 gm | 20ml | Injection": "Ventimox CV 1.2gm Injection.webp",
  "VENTIMOX-CV 1000 | 10x1x10 | Tablet": "Ventimox-CV 1000 Tablet 10x1x10.webp",
  "VENTIMOX-CV 228.5 | 30ml | Dry Syrup": "Ventimox- CV 228.5 Dry Syrup 30ML.webp",
  "VENTIMOX-CV 228.5 | 10x1x10 | Tablet": "Ventimox- CV 228.5 Dry Syrup 30ML.webp",
  "VENTIMOX-CV 375 | 10x1x10 | Tablet": "Ventimox-CV 375 10x1x10 Tablets.webp",
  "VENTIMOX-CV 457 | 30ml | Dry Syrup": "Ventimox CV 457 Dry Syrup 30ml.webp",
  "VENTIMOX-CV 457 | 10x1x10 | Tablet": "Ventimox-CV 457 10x1x10 Tablets.webp",
  "VENTIMOX-CV 625 | 10x2x10 | Tablet": "Ventimox-CV 625 10x2x10 Tablets.webp",
  "VENTIMOX-CV 625 | 20x6 | Tablet": "Ventimox-CV 625 20x6 Tablets.webp",
  "VENTOCAIN GEL | 170ml | Syrup": "Ventocain Liquid Gel 170ml.webp",
  "VENTOCAL | 200ml | Syrup": "Ventocal Syrup 200ml.webp",
  "VENTOCAL-500 | 20x15 | Tablet": "Ventocal-500 20x15 Tablets.webp",
  "VENTOCAL-D3 | 10x1x4 | Softgel": "Ventocal D3 Softgel Capsules.webp",
  "VENTOCAL-D3 NANO | 4x5ml | Nano Shot": "Ventocal D3 Nano 5ml.webp",
  "VENTOCAL-XT | 20x15 | Tablet": "Ventocal XT 20x15 Tablets.webp",
  "VENTOCEE-Z | 20x10 | Tablet": "Ventocee-Z 20x10 Tablets.webp",
  "VENTOCOLD | 30x10 | Tablet": "Ventocold 30x10 Tablets.webp",
  "VENTOCOLD DM | 100ml | Dry Syrup": "Ventocold DM Syrup 100ml.webp",
  "VENTOCOLD DM JUNIOR | 60ml | Syrup": "Ventocold DM Junior Syrup 60ml.webp",
  "VENTOCOLD RF | 6x5x10 | Tablet": "Ventocold RF 6x5x10 Tablets.webp",
  "VENTOCORT | 1ml | Injection": "Ventocort 1ml Injection.webp",
  "VENTOCORTIL-10 | 10x5x10 | Tablet": "Ventocortil 10mg 10x5x10 Tablets.webp",
  "VENTOCORTIL-20 | 20x10 | Tablet": "Ventocortil 20mg 20x10 Tablets.webp",
  "VENTOCORTIL-5 | 10x5x10 | Tablet": "Ventocortil 10mg 10x5x10 Tablets.webp",
  "VENTOKAST LC | 60ml | Syrup": "Ventokast-LC Syrup 60ml.webp",
  "VENTOKAST LC | 30ml | Syrup": "Ventokast-LC Syrup 30ml.webp",
  "VENTOKAST LC JUNIOR | 10x1x10 | Tablet": "Ventokast-LC Junior 10x1x10 Tablets.webp",
  "VENTOKAST-LC | 20x1x10 | Tablet": "Ventokast LC 20x1x10 Tablets.webp",
  "VENTOLYTE ORS | 21.8gm | Ors": "ORS 50 Sachets.webp",
  "VENTOPHAGUS-20 | 10x10 | Tablet": "Ventophagus 20 10x10 Tablets.webp",
  "VENTOPHYLIN-400 | 10x1x10 | Tablet": "Ventophylin-400 10x1x10 Tablets.webp",
  "VENTOPHYLIN-M | 10x1x10 | Tablet": "Ventophylin-M 10x1x10 Tablets.webp",
  "VENTOPHYLIN-XL | 10x1x10 | Tablet": "Ventophylin XL 10x1x10 Tablets.webp",
  "VENTORAN | 1ml | Injection": "Ventoran 10x5x1 Injection.webp",
  "VENTORAN 2X | 75gm | Spray": "Ventoran-2x Spray 75gm.webp",
  "VENTORAN 2X | 35gm | Spray": "Ventoran-2x Spray 35gm.webp",
  "VENTORAN 2X | 30gm | Ointement": "Ventoran 2X pain gel 30gm.webp",
  "VENTORAN PAIN | 50ml | Oil": "Ventoran-Pain Oil 50ml.webp",
  "VENTORAN PAIN | 10gm | Ointement": "Ventoran 10g Pain-Gel single.webp",
  "VENTORAN PAIN | 30gm | Ointement": "Ventoran 2X pain gel 30gm.webp",
  "VENTORAN-100 SR | 30x10 | Tablet": "Ventoran SR  100mg Tablets.webp",
  "VENTORAN-A | 20x10 | Tablet": "Ventoran MR 20x10 Tablets.webp",
  "VENTORAN-MR | 80x10 | Tablet": "Ventoran-Mr 80x10 Tablets.webp",
  "VENTORAN-P | 30x10 | Tablet": "Ventoran-P 30x10 Tablets.webp",
  "VENTORAN-P  CLEAR PVC | 10x2x10 | Tablet": "Ventoran-P 10x2x10 Tablets White PVC.webp",
  "VENTORAN-SP | 20x10 | Tablet": "Ventoran-Sp 20x10 Tablets.webp",
  "VENTOSCAB | 100ml | Lotion": "Ventoscab 100ml Lotion.webp",
  "VENTOSCAB P | 75gm | Soap": "Ventoscab-P Soap.webp",
  "VENTOTUS-L | 100ml | Syrup": "Ventotus-L 100ml Syrup.webp",
  "VENTOXOL | 100ml | Syrup": "Ventoxol 100ml Syrup.webp",
  "VENTOXOL | 60ml | Syrup": "Ventoxol 60ml Syrup.webp",
  "VENTOXOL-L | 100ml | Syrup": "Ventoxol 100ml Syrup.webp",
  "VENTOXOL-L | 60ml | Syrup": "Ventoxol 60ml Syrup.webp",
  "VENTOXOL-LS DROPS | 15ml | Drop": "Ventoxol-LS 15ml Drops.webp",
  "VENTOXOL-LS JUNIOR | 100ml | Syrup": "Ventoxol-LS Junior Syrup 60ml.webp",
  "VENTOXOL-LS JUNIOR | 60ml | Syrup": "Ventoxol-LS Junior Syrup 60ml.webp",
  "VENZOLID DRY | 30ml | Dry Syrup": "VenZolid Dry Syrup 100mg.webp",
  "VENZOLID-600 | 10x1x10 | Tablet": "Venzolid 600mg 10x1x10 Tablets.webp",
  "VITURNA | 100ml | V-wash": "Viturna 100ml V-Wash.webp",
  "VOGLIVENT-MG1 | 10x2x15 | Tablet": "Voglivent-MG1 10x2x15 Tablets.webp",
  "VOGLIVENT-MG2 | 10x2x15 | Tablet": "Voglivent-MG2 10x2x15 Tablets.webp",
  "WORMIBAND PLUS | 10x10x1 | Tablet": "Wormiband PLUS 10x10x1 Tablets.webp",
  "WORMIBAND-400 | 10x10x1 | Tablet": "Wormiband 400 10x10x1 Tablets.webp",
  "XIOTIL | 30ml | Dry Syrup": "Xiotil-125mg Dry Syrup.webp",
  "XIOTIL-250 | 10x1x10 | Tablet": "Xiotil 250mg 10x1x10 Tablets.webp",
  "XIOTIL-500 | 10x1x10 | Tablet": "Xiotil 500mg 10x1x10 Tablets.webp",
  "XIOTIL-CV 625 | 10x1x6 | Tablet": "Xiotil-CV 625mg 10x1x6 Tablets.webp",
  "YUVIGRA-LA | 20x1x4 | Tablet": "Yuvigra-La 20x1x4 Tablets.webp",
  "YUVIGRA-LA FORTE | 24x1x4 | Tablet": "Yuvigra-LA Forte 24x1x4 Tablets.webp",
  "ZINCOMINTA | 200ml | Syrup": "Zincominta 200ml Syrup.webp",
  "ZINCOMINTA-RICH | 10x1x10 | Softgel": "Zincominta Rich 10x1x10 Capsules.webp",
  "ZITHROSET-100 XL | 30ml | Dry Syrup": "Zithroset XL Dry Syrup 100mg.webp",
  "ZITHROSET-200 XL | 30ml | Dry Syrup": "Zithroset XL Dry Syrup 200mg.webp",
  "ZITHROSET-250 | 20x1x6 | Tablet": "Zithroset - 250mg 10x1x6 Tablets.webp",
  "ZITHROSET-3 KIT | 1x04 | Tablet": "Zithroset - 3 Kit Tablets.webp",
  "ZITHROSET-500 | 20x1x3 | Tablet": "Zithroset -500mg 10x1x3 Tablets.webp",
  "ZYFIX 200-LB | 10x10 | Tablet": "Zyfix-200LB 10x10 Tablets.webp",
  "MEGADRON 4 | 20x14 | Tablet": "Megadron 16 20x14 Tablets.webp",
  "MEGADRON 8 | 20x14 | Tablet": "Megadron 16 20x14 Tablets.webp",
  "MEGADRON-16 | 20x14 | Tablet": "Megadron 16 20x14 Tablets.webp"
};
