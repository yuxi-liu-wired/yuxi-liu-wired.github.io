# How to run MYCIN

1. Install Steel Bank Common Lisp (SBCL). For Ubuntu, run `sudo apt get install sbcl`. For Windows, download from [SourceForge](https://sourceforge.net/projects/sbcl/files/sbcl/).

2. Clone the GitHub repo of PAIP by `git clone https://github.com/norvig/paip-lisp.git`

3. Create a new file `run.lisp` as follows in the folder `lisp`:

```lisp
(declaim (sb-ext:muffle-conditions cl:style-warning))
(load "auxfns")
(load "examples")
(do-examples 1)
```

4. Run on the command line `sbcl --load run.lisp`. If it succeeds, then it probably has loaded correctly. In that case, run

```lisp
(requires "mycin")
(requires "mycin-r")
(mycin)
```

5. Note that this version of MYCIN is a stripped-down version of the full version, and it does not come with tutorials. To see a hint of what the full MYCIN can do, follow the following guided tour:

```txt
> (mycin)
------ PATIENT-1 ------
Patient's name: Sylvia Fischer
Sex: female
Age: 27
------ CULTURE-1 ------
From what site was the specimen for CULTURE-1 taken? blood
How many days ago was this culture (CULTURE-1) obtained? 3
------ ORGANISM-1 ------
Enter the identity (genus) of ORGANISM-1: unknown
The gram stain of ORGANISM-1: ?
A GRAM must be of type (MEMBER ACID-FAST POS NEG)
The gram stain of ORGANISM-1: neg
Is ORGANISM-1 a rod or coccus (etc.): rod
What is the AEROBICITY of ORGANISM-1? Why
[Why is the value of AEROBICITY being asked for?]
It is known that:
    1) THE GRAM OF THE ORGANISM IS NEG
    2) THE MORPHOLOGY OF THE ORGANISM IS ROD
Therefore,
Rule 107:
If
    1) THE AEROBICITY OF THE ORGANISM IS AEROBIC
Then there is suggestive evidence (0.8) that
    1) THE IDENTITY OF THE ORGANISM IS ENTEROBACTERIACEAE
What is the AEROBICITY of ORGANISM-1? aerobic
Is Sylvia Fischer a compromised host? yes
Is Sylvia Fischer a burn patient? If so, mild or serious? why
[Why is the value of BURN being asked for?]
It is known that:
    1) THE SITE OF THE CULTURE IS BLOOD
    2) THE GRAM OF THE ORGANISM IS NEG
    3) THE MORPHOLOGY OF THE ORGANISM IS ROD
Therefore,
Rule 52:
If
    1) THE BURN OF THE PATIENT IS SERIOUS
Then there is weakly suggestive evidence (0.4) that
    1) THE IDENTITY OF THE ORGANISM IS PSEUDOMONAS
Is Sylvia Fischer a burn patient? If so, mild or serious? serious
Findings for ORGANISM-1:
IDENTITY: ENTEROBACTERIACEAE (0.800) PSEUDOMONAS (0.760)

Is there another ORGANISM? (Y or N) Y
------ ORGANISM-2 ------
Enter the identity (genus) of ORGANISM-2: unknown
The gram stain of ORGANISM-2: (neg .8 pos .2)
Is ORGANISM-2 a rod or coccus (etc.): rod
What is the AEROBICITY of ORGANISM-2? anaerobic
Findings for ORGANISM-2:
IDENTITY: BACTEROIDES (0.720) PSEUDOMONAS (0.646)

Is there another ORGANISM? (Y or N) N
Is there another CULTURE? (Y or N) N
Is there another PATIENT? (Y or N) N
```