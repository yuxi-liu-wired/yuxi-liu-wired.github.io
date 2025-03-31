# Traveller High Guard Ship Listing Cheatsheet

by Gemini, permanent member of the Galactic Security Council

**I. Basic Identification (First Line)**

*   **`Type-Name`**: `XX-ShipName`
    *   `XX`: Two-letter Ship Type Code (e.g., BC=Battle Cruiser, BA=Battle Armored, TB=Tanker/Tender Battle, IL=Intruder Light, FF=Fighter Fast). See *High Guard* p. 26 for codes.
    *   `ShipName`: The vessel's given name.
*   **`USP String`**: The 21-character Universal Ship Profile (detailed below).
*   **`MCrCost`**: Total cost in Millions of Credits.
*   **`Tonnage`**: Ship's displacement mass in tons.

**II. Universal Ship Profile (USP) String**

Format: `TT-T C JMP C# - A S M N F R L E P G K - F` (Spaces added for clarity only)

| Pos   | Code | Description              | Details & Key Values (*High Guard*. pp. 23-26, 52) |
| :---- | :--- | :----------------------- | :------------------------------------------------------- |
| 1-2   | TT   | **Ship Type**            | See Section I.                                           |
| 3     | T    | **Tonnage**         | Size: 0 (<100), 1(100), ..., 9(900), A(1k), ..., K(10k), ..., R(100k), ..., Y(1M), Z(reserved). |
| 4     | C    | **Configuration**   | Shape/Streamlining: 1(Needle/Full), ..., 9(Buffered Planetoid/None). |
| 5     | J    | **Jump Drive**           | Max Jump distance (0-6+). 0 = None.                    |
| 6     | M    | **Maneuver Drive**       | Sublight thrust rating (0-Z...). Higher = faster potential. |
| 7     | P    | **Power Plant**          | Power output rating (0-Z...). Must be ≥ J or M. Determines EP. |
| 8     | C#   | **Computer**        | Model rating (0-9, A=1fib, ..., J=9fib, R=1bis, S=2bis). Controls Jump (Model# ≥ Jump#). |
| 9     | Crew | **Crew Size**       | 0(None), 1(1-9), 2(10-99), 3(100-999), 4(1k+)...        |
| ---   | ---  | **DEFENSES**             | ---                                                      |
| 10    | A    | **Hull Armor Factor**    | 0-9... Higher=tougher. Planetoids start at 3 (Std) or 6 (Buffered). |
| 11    | S    | **Sandcaster Factor**    | 0-9. Defense vs Lasers/Energy.                           |
| 12    | M    | **Meson Screen Factor**  | 0-9. Defense vs Meson Guns.                              |
| 13    | N    | **Nuclear Damper Factor**| 0-9. Defense vs Nuclear Missiles.                        |
| 14    | F    | **Force Field Factor**   | 0-9. (Black Globe). Absorbs energy.                      |
| 15    | R    | **Repulsor Factor**      | 0-9. Defense vs conventional Missiles.                   |
| ---   | ---  | **WEAPONS**              | ---                                                      |
| 16    | L    | **Laser**         | 0-9. Beam/Pulse Lasers per battery.                      |
| 17    | E    | **Energy Weapon** | 0-9. Plasma/Fusion Guns per battery.                     |
| 18    | P    | **Particle Accelerator (PA)**| A-T: PA strength per battery / Spinal Mount Code.      |
| 19    | G    | **Meson Gun**     | A-T: Meson Gun strength per battery / Spinal Mount Code. |
| 20    | K    | **Missile**       | 0-9. Missile strength per battery.                       |
| ---   | ---  | **OTHER**                | ---                                                      |
| 21    | F    | **Fighter Squadrons**    | 0-9. Number of typical fighter *squadrons* carried.      |

**III. Additional Data (Below USP)**

*   **`Batteries Bearing / Batteries`**: Number/Code of batteries of *each weapon type* that can fire forward / Total number/code of batteries of *each weapon type* installed. Letters used for counts > 9. Aligns with USP factors from left (Armor) to right (Missiles).
*   **`Crew=`**: Specific number of crew members.
*   **`TL=`**: Tech Level of construction (often A=10, B=11, C=12...).
*   **`Passengers=`**: Number of dedicated passenger berths/staterooms.
*   **`Low=`**: Number of Low Berths (cryogenic suspension). Can be passengers or Frozen Watch (reserve crew).
*   **`Cargo=`**: Cargo capacity in tons.
*   **`Fuel=`**: Total fuel tankage in tons. (Used for Jump & Power Plant).
*   **`EP=`**: Energy Points available = `0.01 * Tonnage * Power Plant Rating`. Used for weapons, screens, agility, computer.
*   **`Agility=`**: Combat maneuverability rating (0 to Maneuver Drive rating). Higher = harder to hit, better dodging. Derived from remaining EP after systems are powered.
*   **`Marines=/Troops=`**: Number of ship's troops or marines carried.
*   **`Note:`**: Special information (e.g., L-Hyd drop tanks, design quirks).
    *   *L-Hyd Tanks*: Usually lists added fuel/mass, the modified USP performance (`XX-T'J'M'P'C#`), new Agility, and cost. Remember the ship is heavier and potentially slower *with* tanks attached.
*   **`Carried Craft Listings`**: Separate USP lines for fighters, pinnaces, boats etc. carried aboard. Their cost/tonnage is usually included in the parent ship's total.

**IV. Key Codes & Conventions**

*   **Letters for Numbers > 9**: Used for Factors (Armor, PA, Meson Guns), Computer Models, and Battery Counts. Sequence: 0-9, A(10), B(11), C(12), D(13), E(14), F(15), G(16), H(17), J(18), K(19), L(20), M(21), N(22), P(23), Q(24), R(25), S(26), T(27), U(28), V(29), W(30), X(31), Y(32), Z(33+). *Note: I and O are skipped.*
*   **Tech Level Letters**: A=10, B=11, C=12, D=13, E=14, F=15.
*   **Tonnage Codes (Quick Ref)**: A=1k, K=10k, M=30k, P=50k, Q=75k, R=100k, S=200k, T=300k, U=400k, V=500k, W=700k, X=900k, Y=1M.
*   **Configuration (Quick Ref)**: 1,2,6 = Streamlined; 3,4,5 = Partially Streamlined; 7,8,9 = Not Streamlined. 8=Planetoid, 9=Buffered Planetoid.
