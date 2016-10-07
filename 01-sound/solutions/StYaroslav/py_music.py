import wave, random, struct, math

noise_file = open('noise.raw', 'wb')

k=425

for i in range(0, 1000):
        value = 2*math.sin(2*math.pi*i*k/8000)
        #print(str(value))
        value=int(value)
        packed_value = struct.pack('b', value)
        noise_file.write((packed_value))
noise_file.close()
