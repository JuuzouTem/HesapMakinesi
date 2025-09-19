# Math

Question:

Ali, bit pazarından aldığı eski bir hesap makinesinin bazı işlemleri farklı sonuçlarla gösterdiğini fark eder. Makineyi bir süre kullanan Ali, makinenin kendine özgü bir çalışma prensibi olduğunu keşfeder. Ali'nin yaptığı bazı denemeler ve ekranda gördüğü sonuçlar aşağıda verilmiştir:

5 + 20 işleminin sonucu 14,
5 - 20 işleminin sonucu -14,
5 * 20 işleminin sonucu 70

Ali, negatif sayılarla deneme yaptığında ise ilginç bir durumla karşılaşır:

(-5) + (-20) işleminin sonucu -25,
(-5) - (-20) işleminin sonucu 15,
(-5) * (-20) işleminin sonucu 100

Ali, bu üç işlemin sonucunun matematiksel olarak doğru olduğunu görür.

Yaptığı analizler sonucunda Ali, makinenin çalışma sisteminin bir kısmını şu şekilde çözer:

   * Makine, normalde doğru sonuç vermediği durumlarda, önce sayılara bağlı olarak bir "Şifreli Değer" üretiyor.
   * Bu şifreli değerleri kullanarak istenen işlemi yapıyor ve bir "Şifreli Sonuç" buluyor.
   * Son olarak ekranda gösterdiği değer, işlemin "Gerçek Sonucu" ile bulduğu "Şifreli Sonucu" arasındaki fark oluyor.

Buna göre, Ali bu eski hesap makinesinde 12 * 11 işlemini yaparsa ekranda hangi sonucu görür?

A) 132
B) 120
C) 110
D) 66
E) 54


**Solution:**

Özel hesap makinesi şöyle çalışıyor: İlk başta girilen sayıların asal olup olmadığına bakıyor. Eğer sayı asal ise bir şey yapmıyor fakat eğer asal değil ise o sayının asal çarpanlarına ayırıyor asal çarpanlarına ayrılan sayıların üslerini kullanarak pozitif bölen sayısı formülünü kullanıyor [verdiğim örnekten gidersek 5 * 20 =>  5 asal sayı, 20 asal değil, 20'nin asal çarpanları 2^2 ve 5^1 bunların üslerini kullanarak pozitif bölen sayı formülünü uygularsak (2+1) * (1+1) yani 3 * 2'den 6] bulduğu sayıyı eğer yanındaki sayı asal ise o asal sayı ile, eğer asal değil ise yine aynı işlemler uygulanarak elde edilen sayı ile kullanıcının seçtiği işlemi [toplama, çıkarma, çarpma, bölme] yaparak bir sonuç elde ediyor [örnekten gidersek 5 * 6=30] bu elde edilen sonuç ile normalde çıkması gereken sonuçlar arasında bir çıkarma işlemi yapılıyor. [örnekten gidersek 5 * 20=100, 5 * 6=30, 100-30=70] elde edilen sonuç ise kullanıcıya gösterilecek olan cevap oluyor. Burada soruyu çözmek için görülmesi gereken şeylerden birincisi negatif sayıların asal sayı olamayacağıydı (en azından lisede bize böyle öğretildi). Negatiflerde bozulma yaşanmayıpta, pozitif sayılarda bozulma yaşatabilecek olasılıklardan en kolay akla geleni buydu. Aklına nasıl getirirsin bilmiyorum burada artık bilmek değil görmek veya başka bir tabirle hissetmek gerekiyor ama burada bu durumu bulduktan sonra asal olmayan sayıları asal çarpanlarına ayırıp "pozitif bölen sayısını bulma" formülünü kullanman gerekiyor. Bu ikisinin bulduktan sonra verilen "Ali"nin çözüp bize söylediği 3 bilgiyi kullanıp cevabın bulunup bulunmadığını test etmen gerekiyordu. Arkadaşlarıma soruyu atıp çözülebilir olup olmadığını test ettirdim içlerinden sadece biri çözebildi ama en azından çözülebilir olduğunu anlamış oldum. Çözüm bu kadardı. 

**Strange Solution:**

Özel hesap makinesi şöyle çalışıyor: İlk başta girilen pozitif sayıların tek mi yoksa çift mi olduğuna bakıyor. Eğer sayı tek ise "Şifreli Değer" olarak sayının kendisini alıyor, fakat eğer sayı çift ise o sayının kaç olduğunun bir önemi kalmaksızın "Şifreli Değerini" her zaman 6 olarak kabul ediyor. Bu şifreli değerleri bulduktan sonra, kullanıcının seçtiği işlemi [toplama, çıkarma, çarpma] bu şifreli değerlerle yaparak bir "Şifreli Sonuç" elde ediyor. Son olarak ekranda gösterilecek cevap, işlemin normalde çıkması gereken "Gerçek Sonucu" ile makinenin bulduğu "Şifreli Sonuç" arasındaki fark oluyor. [Örnekten gidersek 5 * 20 işleminde; 5 tek olduğu için değeri 5, 20 çift olduğu için değeri 6 alınır. Şifreli sonuç 5 * 6=30 bulunur. Gerçek sonuç 100 olduğundan, ekran 100-30=70 gösterir.] Bu durumu anladıktan sonra 12 * 11 işlemini çözmek için aynı adımları izlemek gerekiyor: 12 çift olduğu için şifreli değeri 6, 11 tek olduğu için şifreli değeri 11'dir. Bu ikisinin şifreli çarpımı 6 * 11 = 66 yapar. İşlemin gerçek sonucu olan 132'den bu şifreli sonuç olan 66'yı çıkardığımızda, ekranda görünecek olan 66 cevabını buluruz. Burada soruyu çözmek için görülmesi gereken şey, negatiflerde bozulma yaşanmazken pozitif sayılardaki bozulmanın, sayıların kendisinden çok tek veya çift olma karakteristiğine bağlı olduğuydu. Bu durumu fark ettikten sonra, "Ali'nin çözüp bize söylediği 3 bilgiyi" kullanarak bu kuralı test etmek ve doğru cevaba ulaşmak mümkün oldu. Çözüm bu kadardı.
