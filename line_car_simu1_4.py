import cv2,math,numpy as np
from time import sleep

robot_x = 80
robot_y = 75
robot_size = 20
save_data = [0,0,0]
theta = 90
# ロボットにセンサを埋め込む
sensor_x = int(robot_x + (robot_size/2)*(math.cos(math.radians(theta))))
sensor_y = int(robot_y + (robot_size/2)*(math.sin(math.radians(theta))))
print(sensor_x, sensor_y)
speed = 5
threshold = 100 #threshold for line detection
sampling = 0.1
zero_count = 0
# iterate multiple times to simulate sensor readings

t = 0
#コースの画像をグレースケールで読み込む
while True:
    img = cv2.imread("course.png",flags=cv2.IMREAD_GRAYSCALE)
    # センサの値を取得する,センサは下にある画像の画素値を取得して表示
    sensor_value = img[sensor_y, sensor_x]
    print(sensor_value)

    control_deviation = sensor_value - threshold 
    sd = [t, sensor_value, control_deviation]
    save_data = np.vstack([save_data, sd])

    cv2.circle(img, (int(robot_x), int(robot_y)), robot_size, color = 180, thickness = -1)
    cv2.circle(img,(sensor_x, sensor_y),2, 30,-1)
    #画像の表示
    cv2.imshow("LineTrace",img)

    if cv2.waitKey(10) == 27:
        cv2.destroyAllWindows()
        break

    if robot_x > 515 and robot_y > 320:
        print('simulation ended')
        print('time:' + str(round(t,1)))
        break

    if sensor_value < threshold:
        steer = 15
    else:
        steer = -15

    theta = theta - steer
    robot_x = int(robot_x + speed * math.cos(math.radians(theta)))
    robot_y = int(robot_y + speed * math.sin(math.radians(theta)))
    sensor_x = int(robot_x + (robot_size/2)*(math.cos(math.radians(theta))))
    sensor_y = int(robot_y + (robot_size/2)*(math.sin(math.radians(theta))))
    t += sampling
    # sleep(0.1)

print('Simulation data:')
save_data = save_data[1::,:]

save_data_name = 'ON_OFF_data(threshold =' + str(threshold) + \
    '_sampling=' + str(sampling) + 'speed=' + str(speed) + ').csv'

np.savetxt(save_data_name, save_data, delimiter=',')
    


