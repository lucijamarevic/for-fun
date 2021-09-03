import gravity as g
import numpy as np
import matplotlib.pyplot as plt
from math import pi

au = 1.486*(10**11)
day = 60*60*24
year = 365.242*day
sun_mass = 1.989 * (10**30)
T = 79.91 * year
r = 11.7 * au

a_cen_a = g.Planet("Rigil Kentaurus","blue",1.1 * sun_mass,np.array((0,-2*pi*r/T)),np.array((-11-7*au,0))) 
a_cen_b = g.Planet("Toliman","cyan",0.907 * sun_mass,np.array((0,2*pi*r/T)),np.array((11.7*au,0)))
#a_cen_c = g.Planet("Proxima centauri","orange",0.125 * sun_mass,np.array((0,79920)),np.array((0,-28 * au)))

p = g.Universe()
p.add_planet(a_cen_a)
p.add_planet(a_cen_b)
#p.add_planet(a_cen_c)
p.interact(T)

plt.style.use('dark_background')
plt.figure("Alpha centauri AB", figsize = (8,8))
plt.plot(a_cen_a.x_list,a_cen_a.y_list, c = a_cen_a.color, label = a_cen_a.name)
plt.plot(a_cen_b.x_list,a_cen_b.y_list, c = a_cen_b.color, label = a_cen_b.name)
#plt.plot(a_cen_c.x_list,a_cen_c.y_list, c = a_cen_c.color, label = a_cen_c.name)
plt.axis('off') 
plt.legend(loc = "upper right")
plt.show()