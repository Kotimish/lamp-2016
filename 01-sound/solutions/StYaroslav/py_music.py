import wave, random, struct, math

def gener(i, Gz):

        AMP=63.5
        diskr=44100
        
        value = AMP*math.sin(2*math.pi*i*Gz1/diskr)

        return value

def plus_nota(Gz1, Gz2):
        noise_file = open('noise.raw', 'ab')
        for i in range(0, 11025):
                value = gener(i, Gz1) + gener(i, Gz2)
                #print(str(value))
                value=int(value)
                packed_value = struct.pack('b', value)
                noise_file.write((packed_value))
        noise_file.close()

for Gz1 in (697, 770, 852, 941):
        for Gz2 in (1209, 1336, 1477):
                plus_nota(Gz1,Gz2)
                plus_nota(Gz1,Gz2)
                plus_nota(Gz1,Gz2)
