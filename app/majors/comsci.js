function audit_build(option){
//agents
agents= [];
//root agents
root_agents= [];
//rules
rules = [];
//global list of completed courses 
taken = []

    let a_len = 0; 
    

	agents.push(new Agent(
		'prep_1',
		['%and', 'COM+SCI 1', 'COM+SCI 31', 'COM+SCI 32', 'COM+SCI 33', 'COM+SCI 35L']
		)
	);

	a_len = agents.length-1;
	agents[a_len].chk = check.bind(agents[a_len], );
	agents[a_len].upd = finish.bind(agents[a_len], 5, -1, );

	agents.push(new Agent(
		'prep_2',
		['%and', 'MATH 31A', 'MATH 31B', 'MATH 32A', 'MATH 32B', 'MATH 33A', 'MATH 33B', 'MATH 61']
		)
	);

	a_len = agents.length-1;
	agents[a_len].chk = check.bind(agents[a_len], );
	agents[a_len].upd = finish.bind(agents[a_len], 7, -1, );

	agents.push(new Agent(
		'prep_3',
		['%and', ['%and', 'PHYSICS 1A', 'PHYSICS 1B', 'PHYSICS 1C'], ['%or?one', 'PHYSICS 4AL', 'PHYSICS 4BL']]
		)
	);

	a_len = agents.length-1;
	agents[a_len].chk = check.bind(agents[a_len], );
	agents[a_len].upd = finish.bind(agents[a_len], 4, -1, );

	agents.push(new Agent(
		'major_1',
		['%and', 'COM+SCI 111', 'COM+SCI 118', 'COM+SCI 131', 'COM+SCI M151B', 'COM+SCI M152A', 'COM+SCI 180', 'COM+SCI 181']
		)
	);

	a_len = agents.length-1;
	agents[a_len].chk = check.bind(agents[a_len], );
	agents[a_len].upd = finish.bind(agents[a_len], 7, -1, );

	agents.push(new Agent(
		'major_2',
		['$or?one', 'C&EE 110', 'EC+ENGR 131A', 'MATH 170A', 'STATS 100A']
		)
	);

	a_len = agents.length-1;
	agents[a_len].chk = check.bind(agents[a_len], );
	agents[a_len].upd = finish.bind(agents[a_len], 1, -1, );

	if (option['major_5'] == 'BIOENGR'){
		agents.push(new Agent(
			'major_5',
			['%and', 'BIOENGR C101', 'BIOENGR C105', 'BIOENGR C107', 'BIOENGR 120', 'BIOENGR C131', 'BIOENGR C139B', 'BIOENGR CM145', 'BIOENGR M153', 'BIOENGR 165EW', 'BIOENGR C175', 'BIOENGR 177A', 'BIOENGR CM178', 'BIOENGR 180', 'BIOENGR M182', 'BIOENGR M184', 'BIOENGR CM186', 'BIOENGR 100', 'BIOENGR C104', 'BIOENGR C106', 'BIOENGR 110', 'BIOENGR 121', 'BIOENGR C139A', 'BIOENGR CM140', 'BIOENGR C147', 'BIOENGR C155', 'BIOENGR 167L', 'BIOENGR 176', 'BIOENGR 177B', 'BIOENGR C179', 'BIOENGR 180L', 'BIOENGR C183', 'BIOENGR C185', 'BIOENGR CM187', 'CHEM 20B', 'LIFESCI 7A']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B', 'LIFESCI 7A']));
		agents[a_len].rules.push(subset_restriction.bind(agents[a_len],['%and', 'CHEM 20B', 'LIFESCI 7A']));
	}
	if (option['major_5'] == 'CH+ENGR'){
		agents.push(new Agent(
			'major_5',
			['%and', 'CH+ENGR 100', 'CH+ENGR 101B', 'CH+ENGR 102A', 'CH+ENGR 103', 'CH+ENGR 104B', 'CH+ENGR 104CL', 'CH+ENGR 106', 'CH+ENGR 108A', 'CH+ENGR 109', 'CH+ENGR C111', 'CH+ENGR 113', 'CH+ENGR C115', 'CH+ENGR C118', 'CH+ENGR C121', 'CH+ENGR C125', 'CH+ENGR C128', 'CH+ENGR C140', 'CH+ENGR M153', 'CH+ENGR 188SA', 'CH+ENGR 188SC', 'CH+ENGR 199', 'CH+ENGR 101A', 'CH+ENGR 101C', 'CH+ENGR 102B', 'CH+ENGR 104A', 'CH+ENGR 104C', 'CH+ENGR 104D', 'CH+ENGR 107', 'CH+ENGR 108B', 'CH+ENGR 110', 'CH+ENGR C112', 'CH+ENGR CM114', 'CH+ENGR C116', 'CH+ENGR C119', 'CH+ENGR C124', 'CH+ENGR CM127', 'CH+ENGR C135', 'CH+ENGR CM145', 'CH+ENGR 188', 'CH+ENGR 188SB', 'CH+ENGR 199', 'CHEM 20B']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B']));
	}
	if (option['major_5'] == 'C&EE'){
		agents.push(new Agent(
			'major_5',
			['%and', 'C&EE 103', 'C&EE C105', 'C&EE 108L', 'C&EE 120', 'C&EE 123', 'C&EE 128L', 'C&EE 130', 'C&EE 135B', 'C&EE 135L', 'C&EE 137L', 'C&EE 141', 'C&EE 142L', 'C&EE 144', 'C&EE 148', 'C&EE 151', 'C&EE 153', 'C&EE 155', 'C&EE 156B', 'C&EE 157B', 'C&EE 157L', 'C&EE 164', 'C&EE M166', 'C&EE 170', 'C&EE 181', 'C&EE 188', 'C&EE 199', 'C&EE 102', 'C&EE C104', 'C&EE 108', 'C&EE 110', 'C&EE 121', 'C&EE 125', 'C&EE 129L', 'C&EE 135A', 'C&EE M135C', 'C&EE C137', 'C&EE 140L', 'C&EE 142', 'C&EE 143', 'C&EE 147', 'C&EE 150', 'C&EE 152', 'C&EE 154', 'C&EE 156A', 'C&EE 157A', 'C&EE 157C', 'C&EE C159', 'C&EE M165', 'C&EE M166L', 'C&EE 180', 'C&EE C182', 'C&EE 199', 'CHEM 20B']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B']));
	}
	if (option['major_5'] == 'EC+ENGR'){
		agents.push(new Agent(
			'major_5',
			['%and', 'EC+ENGR 3', 'EC+ENGR 10', 'EC+ENGR 101A', 'EC+ENGR 102', 'EC+ENGR 110H', 'EC+ENGR 111L', 'EC+ENGR 113', 'EC+ENGR 113DB', 'EC+ENGR 115A', 'EC+ENGR 115B', 'EC+ENGR 115E', 'EC+ENGR M116L', 'EC+ENGR 121B', 'EC+ENGR 121DB', 'EC+ENGR 123B', 'EC+ENGR 131A', 'EC+ENGR 132B', 'EC+ENGR 133B', 'EC+ENGR 141', 'EC+ENGR C143A', 'EC+ENGR C147', 'EC+ENGR 162A', 'EC+ENGR 163C', 'EC+ENGR 163DB', 'EC+ENGR 164DB', 'EC+ENGR 170B', 'EC+ENGR M171L', 'EC+ENGR 173DB', 'EC+ENGR 180DA', 'EC+ENGR 183DB', 'EC+ENGR 184DB', 'EC+ENGR 188', 'EC+ENGR 188SB', 'EC+ENGR 189', 'EC+ENGR 199', 'EC+ENGR 100', 'EC+ENGR 101B', 'EC+ENGR 110', 'EC+ENGR 110L', 'EC+ENGR 112', 'EC+ENGR 113DA', 'EC+ENGR 114', 'EC+ENGR 115AL', 'EC+ENGR 115C', 'EC+ENGR M116C', 'EC+ENGR M119', 'EC+ENGR 121DA', 'EC+ENGR 123A', 'EC+ENGR 128', 'EC+ENGR 132A', 'EC+ENGR 133A', 'EC+ENGR 134', 'EC+ENGR 142', 'EC+ENGR M146', 'EC+ENGR M153', 'EC+ENGR 163A', 'EC+ENGR 163DA', 'EC+ENGR 164DA', 'EC+ENGR 170A', 'EC+ENGR 170C', 'EC+ENGR 173DA', 'EC+ENGR 176', 'EC+ENGR 180DB', 'EC+ENGR 183DA', 'EC+ENGR 184DA', 'EC+ENGR M185', 'EC+ENGR 188SA', 'EC+ENGR 188SC', 'EC+ENGR 199']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'MAT+SCI'){
		agents.push(new Agent(
			'major_5',
			['%and', 'MAT+SCI 104', 'MAT+SCI 110', 'MAT+SCI 111', 'MAT+SCI C112', 'MAT+SCI 121', 'MAT+SCI 122', 'MAT+SCI 131', 'MAT+SCI 132', 'MAT+SCI 140B', 'MAT+SCI 143A', 'MAT+SCI 150', 'MAT+SCI 160', 'MAT+SCI 161L', 'MAT+SCI CM163', 'MAT+SCI 171', 'MAT+SCI M105', 'MAT+SCI 110L', 'MAT+SCI 111L', 'MAT+SCI 120', 'MAT+SCI 121L', 'MAT+SCI 130', 'MAT+SCI 131L', 'MAT+SCI 140A', 'MAT+SCI 141L', 'MAT+SCI 143L', 'MAT+SCI 151', 'MAT+SCI 161', 'MAT+SCI 162', 'MAT+SCI 170', 'MAT+SCI CM180', 'CHEM 20B']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B']));
	}
	if (option['major_5'] == 'MECH&AE'){
		agents.push(new Agent(
			'major_5',
			['%and', 'MECH&AE 102', 'MECH&AE 105A', 'MECH&AE 107', 'MECH&AE C131G', 'MECH&AE 135', 'MECH&AE C137', 'MECH&AE CM140', 'MECH&AE 150B', 'MECH&AE C150G', 'MECH&AE C150R', 'MECH&AE 154B', 'MECH&AE 155', 'MECH&AE C156B', 'MECH&AE 157A', 'MECH&AE 161B', 'MECH&AE 162A', 'MECH&AE 162E', 'MECH&AE 166C', 'MECH&AE 169A', 'MECH&AE 171B', 'MECH&AE 174', 'MECH&AE 181A', 'MECH&AE 182C', 'MECH&AE M183B', 'MECH&AE 185', 'MECH&AE C187L', 'MECH&AE 101', 'MECH&AE 103', 'MECH&AE 105D', 'MECH&AE 131A', 'MECH&AE 133A', 'MECH&AE 136', 'MECH&AE C138', 'MECH&AE 150A', 'MECH&AE 150C', 'MECH&AE C150P', 'MECH&AE 154A', 'MECH&AE 154S', 'MECH&AE 156A', 'MECH&AE 157', 'MECH&AE 161A', 'MECH&AE 161C', 'MECH&AE 162D', 'MECH&AE 166A', 'MECH&AE M168', 'MECH&AE 171A', 'MECH&AE 172', 'MECH&AE C175A', 'MECH&AE 182B', 'MECH&AE 183A', 'MECH&AE C183C', 'MECH&AE C187L', 'CHEM 20B']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B']));
	}
	if (option['major_5'] == 'COM+GEN'){
		agents.push(new Agent(
			'major_5',
			['%and', 'CHEM 20A', 'EE+BIOL 135', 'HUM+GEN C144', 'LIFESCI 7A', 'LIFESCI 7B', 'LIFESCI 7C', 'LIFESCI 107', 'MCD+BIO 144', 'MCD+BIO 172', 'PHYSCI 125', 'BIOMATH M203', 'BIOMATH M211', 'BIOSTAT M272', 'BIOSTAT M278', 'EE+BIOL M231', 'HUM+GEN 236A', 'HUM+GEN 236B', 'STATS M254']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		agents[a_len].rules.push(not_used_for_other.bind(agents[a_len],['%and', 'CHEM 20B']));
	}
	if (option['major_5'] == 'COM+GEN'){
		agents.push(new Agent(
			'major_5',
			['%and', 'CH+ENGR 102A', 'CH+ENGR CM127', 'C&EE 151', 'C&EE 153', 'C&EE C159', 'EC+ENGR M185', 'ENVIRON M153', 'ENVIRON 157', 'ENVIRON 159', 'MECH&AE 105A', 'MECH&AE 133A', 'MECH&AE 135', 'MECH&AE 136', 'MECH&AE C137', 'MECH&AE 150C', 'CH+ENGR 223', 'MAT+SCI 252', 'MAT+SCI 298']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'ENGR+MATH'){
		agents.push(new Agent(
			'major_5',
			['%and', 'C&EE 103', 'C&EE 110', 'COM+SCI 112', 'COM+SCI 170A', 'COM+SCI 180', 'COM+SCI 181', 'EC+ENGR 102', 'EC+ENGR 133A', 'EC+ENGR 131A', 'MECH&AE 181A', 'MECH&AE 182B', 'MECH&AE 182C', 'MATH 61', 'MATH 110A', 'MATH 115A', 'MATH 131A', 'MATH 132', 'MATH 151A', 'MATH 164', 'MATH 167', 'MECH&AE 181A', 'MECH&AE 182B', 'MECH&AE 182C']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'ENGR+SCI'){
		agents.push(new Agent(
			'major_5',
			['%and', 'BIOENGR 100', 'BIOENGR C101', 'CH+ENGR 100', 'CH+ENGR 102A', 'C&EE 101', 'C&EE 103', 'C&EE 108', ['%or?one', 'COM+SCI 31', 'MECH&AE M20', 'C&EE M20'], 'COM+SCI 32', 'EC+ENGR 10', 'EC+ENGR 100', 'EC+ENGR 101A', ['%or?one', 'ENGR M101', 'MAT+SCI M105'], 'EC+ENGR 102', 'EC+ENGR 133A', 'MAT+SCI 104', 'MECH&AE 101', 'MECH&AE 102', 'MECH&AE 103', 'MECH&AE 105A']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'NANO'){
		agents.push(new Agent(
			'major_5.1',
			['%or?one', 'ENGR M101', 'MAT+SCI M105']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 1, 4, );

		agents.push(new Agent(
			'major_5.2',
			['%and', ['%or?one', 'ENGR M103', 'ENGR C&EEM165'], 'EC+ENGR 128', 'MECH&AE M183B', 'MECH&AE C187L']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 2, 8, );

		root_agents.push(new RootAgent(
			'major_5',
			['major_5.1', 'major_5.2']
			)
		);

		a_len = root_agents.length-1;
		root_agents[a_len].upd = finish_agent_subgrp.bind(root_agents[a_len], 3, 12, 2, );
	}
	if (option['major_5'] == 'PREMED'){
		agents.push(new Agent(
			'major_5',
			['%and', 'CHEM 30BL', 'CHEM 153A', 'LIFESCI 7B', 'LIFESCI 7C', 'LIFESCI 107', 'PHYSICS 4BL', ['%or?one', 'BIOSTAT 100A', 'STATS 100A']]
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'TECH+MGMT'){
		agents.push(new Agent(
			'major_5',
			['%and', 'C&EE 170', 'ENGR 110', 'ENGR 111', 'ENGR 112', 'ENGR 113', 'ENGR 160', 'ENGR 163', 'ENGR 180', 'MGMT 108', 'MGMT 160', 'MGMT 161', 'MGMT 162', 'MGMT 180']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_5'] == 'URBN+PL'){
		agents.push(new Agent(
			'major_5',
			['%and', 'C&EE 180', 'C&EE 181', ['%or?one', 'URBN+PL M120', 'PUB+AFF M109'], 'URBN+PL 121', 'URBN+PL 130', 'URBN+PL CM137', 'URBN+PL 141', 'URBN+PL M150', ['%or?one', 'URBN+PL CM151', 'PUB+AFF M153']]
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_6'] == '1'){
		agents.push(new Agent(
			'major_6',
			['%and', 'COM+SCI 111', 'COM+SCI 117', 'COM+SCI M119', 'COM+SCI CM122', 'COM+SCI 130', 'COM+SCI 132', 'COM+SCI 136', 'COM+SCI C137B', 'COM+SCI 144', 'COM+SCI M146', 'COM+SCI M152A', 'COM+SCI 161', 'COM+SCI 170A', 'COM+SCI 172', 'COM+SCI 174B', 'COM+SCI 180', 'COM+SCI M182', 'COM+SCI M184', 'COM+SCI CM186', 'COM+SCI 112', 'COM+SCI 118', 'COM+SCI CM121', 'COM+SCI CM124', 'COM+SCI 131', 'COM+SCI 133', 'COM+SCI C137A', 'COM+SCI 143', 'COM+SCI 145', 'COM+SCI M151B', 'COM+SCI 152B', 'COM+SCI 168', 'COM+SCI M171L', 'COM+SCI 174A', 'COM+SCI C174C', 'COM+SCI 181', 'COM+SCI 183', 'COM+SCI M185', 'COM+SCI CM187', 'COM+SCI 199']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_6'] == '2'){
		agents.push(new Agent(
			'major_6',
			['%and', ' $add_to?major-5']
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
	if (option['major_6'] == '3'){
		if (option['_'] == 'STATS'){
			agents.push(new Agent(
				'_',
				['STATS 100B', 'STATS 101A', 'STATS 101C', 'STATS 102B', 'STATS 105', 'STATS 115', 'STATS 130', 'STATS 140SL', 'STATS 143', 'STATS 147', 'STATS M154', 'STATS 157', 'STATS 170', 'STATS M171', 'STATS C180', 'STATS C183', 'STATS 186', 'STATS 188SB', 'STATS 189', 'STATS 195', 'STATS 100A', 'STATS 100C', 'STATS 101B', 'STATS 102A', 'STATS 102C', 'STATS 131', 'STATS 141SL', 'STATS C145', 'STATS C151', 'STATS C155', 'STATS C161', 'STATS C173', 'STATS 175', 'STATS 182', 'STATS 184', 'STATS 188SA', 'STATS 188SC', 'STATS 189HC']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'ASTR'){
			agents.push(new Agent(
				'_',
				['ASTR 117', 'ASTR 140', 'ASTR 189', 'ASTR 190', 'ASTR 196', 'ASTR 198', 'ASTR 115', 'ASTR 127', 'ASTR 180', 'ASTR 189HC', 'ASTR 194', 'ASTR 197']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'A&O+SCI'){
			agents.push(new Agent(
				'_',
				['A&O+SCI M100', 'A&O+SCI 102', 'A&O+SCI 104', 'A&O+SCI M106', 'A&O+SCI C110', 'A&O+SCI C115', 'A&O+SCI 130', 'A&O+SCI 141', 'A&O+SCI 145', 'A&O+SCI 155', 'A&O+SCI C170', 'A&O+SCI C182', 'A&O+SCI 188', 'A&O+SCI 189HC', 'A&O+SCI 197', 'A&O+SCI 101', 'A&O+SCI 103', 'A&O+SCI M105', 'A&O+SCI 107', 'A&O+SCI 112', 'A&O+SCI CM114', 'A&O+SCI M120', 'A&O+SCI 135', 'A&O+SCI C144', 'A&O+SCI 150', 'A&O+SCI C160', 'A&O+SCI 180', 'A&O+SCI 186', 'A&O+SCI 189', 'A&O+SCI 190']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'BIOL+CH'){
			agents.push(new Agent(
				'_',
				['BIOL+CH M140', 'BIOL+CH 199']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'CH+ENGR'){
			agents.push(new Agent(
				'_',
				['CH+ENGR 100', 'CH+ENGR 101B', 'CH+ENGR 102A', 'CH+ENGR 103', 'CH+ENGR 104B', 'CH+ENGR 104CL', 'CH+ENGR 106', 'CH+ENGR 108A', 'CH+ENGR 109', 'CH+ENGR C111', 'CH+ENGR 113', 'CH+ENGR C115', 'CH+ENGR C118', 'CH+ENGR C121', 'CH+ENGR C125', 'CH+ENGR C128', 'CH+ENGR C140', 'CH+ENGR M153', 'CH+ENGR 188SA', 'CH+ENGR 188SC', 'CH+ENGR 199', 'CH+ENGR 101A', 'CH+ENGR 101C', 'CH+ENGR 102B', 'CH+ENGR 104A', 'CH+ENGR 104C', 'CH+ENGR 104D', 'CH+ENGR 107', 'CH+ENGR 108B', 'CH+ENGR 110', 'CH+ENGR C112', 'CH+ENGR CM114', 'CH+ENGR C116', 'CH+ENGR C119', 'CH+ENGR C124', 'CH+ENGR CM127', 'CH+ENGR C135', 'CH+ENGR CM145', 'CH+ENGR 188', 'CH+ENGR 188SB']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'CHEM'){
			agents.push(new Agent(
				'_',
				['CHEM C100', 'CHEM 103', 'CHEM C107', 'CHEM 110A', 'CHEM 113A', 'CHEM 114', 'CHEM C115A', 'CHEM C115C', 'CHEM 118', 'CHEM 121', 'CHEM C123A', 'CHEM 125', 'CHEM CM127', 'CHEM C140', 'CHEM C143B', 'CHEM C145', 'CHEM C150', 'CHEM 153AH', 'CHEM 153BH', 'CHEM 153CH', 'CHEM 153L', 'CHEM C155', 'CHEM C159', 'CHEM CM160B', 'CHEM C164', 'CHEM 166', 'CHEM 171', 'CHEM C173', 'CHEM C175', 'CHEM C179', 'CHEM C181', 'CHEM 185', 'CHEM 188SA', 'CHEM 188SC', 'CHEM 189HC', 'CHEM 192B', 'CHEM 192D', 'CHEM 192F', 'CHEM 193B', 'CHEM 196A', 'CHEM 199', 'CHEM 101', 'CHEM C105', 'CHEM C108', 'CHEM 110B', 'CHEM C113B', 'CHEM 114H', 'CHEM C115B', 'CHEM M117', 'CHEM M120', 'CHEM C122', 'CHEM C123B', 'CHEM C126A', 'CHEM 136', 'CHEM C143A', 'CHEM 144', 'CHEM 147', 'CHEM 153A', 'CHEM 153B', 'CHEM 153C', 'CHEM 153D', 'CHEM 154', 'CHEM 156', 'CHEM CM160A', 'CHEM C163', 'CHEM C165', 'CHEM CM170', 'CHEM 172', 'CHEM C174', 'CHEM C176', 'CHEM C180', 'CHEM 184', 'CHEM M186', 'CHEM 188SB', 'CHEM 189', 'CHEM 192A', 'CHEM 192C', 'CHEM 192E', 'CHEM 193A', 'CHEM 194']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'C&EE'){
			agents.push(new Agent(
				'_',
				['C&EE 103', 'C&EE C105', 'C&EE 108L', 'C&EE 120', 'C&EE 123', 'C&EE 128L', 'C&EE 130', 'C&EE 135B', 'C&EE 135L', 'C&EE 137L', 'C&EE 141', 'C&EE 142L', 'C&EE 144', 'C&EE 148', 'C&EE 151', 'C&EE 153', 'C&EE 155', 'C&EE 156B', 'C&EE 157B', 'C&EE 157L', 'C&EE 164', 'C&EE M166', 'C&EE 170', 'C&EE 181', 'C&EE 188', 'C&EE 199', 'C&EE 102', 'C&EE C104', 'C&EE 108', 'C&EE 110', 'C&EE 121', 'C&EE 125', 'C&EE 129L', 'C&EE 135A', 'C&EE M135C', 'C&EE C137', 'C&EE 140L', 'C&EE 142', 'C&EE 143', 'C&EE 147', 'C&EE 150', 'C&EE 152', 'C&EE 154', 'C&EE 156A', 'C&EE 157A', 'C&EE 157C', 'C&EE C159', 'C&EE M165', 'C&EE M166L', 'C&EE 180', 'C&EE C182']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'EPS+SCI'){
			agents.push(new Agent(
				'_',
				['EPS+SCI 100', 'EPS+SCI 103A', 'EPS+SCI 103C', 'EPS+SCI C109', 'EPS+SCI 111G', 'EPS+SCI C113', 'EPS+SCI 116', 'EPS+SCI 119', 'EPS+SCI 121F', 'EPS+SCI 123', 'EPS+SCI C126', 'EPS+SCI 136A', 'EPS+SCI 136C', 'EPS+SCI 139', 'EPS+SCI C141', 'EPS+SCI 150', 'EPS+SCI 153', 'EPS+SCI 155', 'EPS+SCI C160', 'EPS+SCI 165', 'EPS+SCI CM173', 'EPS+SCI 188', 'EPS+SCI 189HC', 'EPS+SCI 193B', 'EPS+SCI C194', 'EPS+SCI 199', 'EPS+SCI 101', 'EPS+SCI 103B', 'EPS+SCI C106', 'EPS+SCI C107', 'EPS+SCI 111', 'EPS+SCI 112', 'EPS+SCI CM114', 'EPS+SCI M118', 'EPS+SCI 120', 'EPS+SCI 121', 'EPS+SCI 122', 'EPS+SCI 125', 'EPS+SCI 133', 'EPS+SCI 136B', 'EPS+SCI 137', 'EPS+SCI M140', 'EPS+SCI C143', 'EPS+SCI 152', 'EPS+SCI 154', 'EPS+SCI 156', 'EPS+SCI C162', 'EPS+SCI 171', 'EPS+SCI C179', 'EPS+SCI 189', 'EPS+SCI 193A', 'EPS+SCI 193C']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'ECON'){
			agents.push(new Agent(
				'_',
				['ECON 101', 'ECON 103', 'ECON 106A', 'ECON 106D', 'ECON 106E', 'ECON 106F', 'ECON 106G', 'ECON 106I', 'ECON 106M', 'ECON 106P', 'ECON 106T', 'ECON 106V', 'ECON 107', 'ECON 112', 'ECON 121', 'ECON 122', 'ECON M123', 'ECON C126B', 'ECON 130', 'ECON 131', 'ECON 132', 'ECON M135', 'ECON 140', 'ECON 142', 'ECON 144', 'ECON C146A', 'ECON C146C', 'ECON 147L', 'ECON 150', 'ECON 151', 'ECON C156B', 'ECON 160', 'ECON 164', 'ECON 165', 'ECON C166A', 'ECON C166C', 'ECON 168', 'ECON 170', 'ECON 171', 'ECON 173B', 'ECON C176A', 'ECON C176C', 'ECON 181L', 'ECON 183L', 'ECON C186A', 'ECON C186C', 'ECON M188', 'ECON 188SB', 'ECON 189', 'ECON 191', 'ECON 195A', 'ECON 195C', 'ECON 198B', 'ECON 199B', 'ECON 102', 'ECON 103L', 'ECON 106AL', 'ECON 106DL', 'ECON 106EL', 'ECON 106FB', 'ECON 106GL', 'ECON 106IL', 'ECON 106ML', 'ECON 106PL', 'ECON 106TL', 'ECON 106VL', 'ECON 111', 'ECON 113', 'ECON 121L', 'ECON 122L', 'ECON C126A', 'ECON C126C', 'ECON 130L', 'ECON 131L', 'ECON 134', 'ECON 137', 'ECON 141', 'ECON 143', 'ECON 145', 'ECON C146B', 'ECON 147', 'ECON 148', 'ECON 150L', 'ECON C156A', 'ECON C156C', 'ECON 161', 'ECON 164L', 'ECON 165L', 'ECON C166B', 'ECON 167', 'ECON 169', 'ECON 170L', 'ECON 173A', 'ECON 174', 'ECON C176B', 'ECON 181', 'ECON 183', 'ECON 185', 'ECON C186B', 'ECON 187', 'ECON 188SA', 'ECON 188SC', 'ECON 189HC', 'ECON 192', 'ECON 195B', 'ECON 198A']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'EC+ENGR'){
			agents.push(new Agent(
				'_',
				['EC+ENGR 101A', 'EC+ENGR 102', 'EC+ENGR 110H', 'EC+ENGR 111L', 'EC+ENGR 113', 'EC+ENGR 113DB', 'EC+ENGR 115A', 'EC+ENGR 115B', 'EC+ENGR 115E', 'EC+ENGR M116L', 'EC+ENGR 121B', 'EC+ENGR 121DB', 'EC+ENGR 123B', 'EC+ENGR 131A', 'EC+ENGR 132B', 'EC+ENGR 133B', 'EC+ENGR 141', 'EC+ENGR C143A', 'EC+ENGR C147', 'EC+ENGR 162A', 'EC+ENGR 163C', 'EC+ENGR 163DB', 'EC+ENGR 164DB', 'EC+ENGR 170B', 'EC+ENGR M171L', 'EC+ENGR 173DB', 'EC+ENGR 180DA', 'EC+ENGR CM182', 'EC+ENGR 183DB', 'EC+ENGR 184DB', 'EC+ENGR 188', 'EC+ENGR 188SB', 'EC+ENGR 189', 'EC+ENGR 199', 'EC+ENGR 100', 'EC+ENGR 101B', 'EC+ENGR 110', 'EC+ENGR 110L', 'EC+ENGR 112', 'EC+ENGR 113DA', 'EC+ENGR 114', 'EC+ENGR 115AL', 'EC+ENGR 115C', 'EC+ENGR M116C', 'EC+ENGR M119', 'EC+ENGR 121DA', 'EC+ENGR 123A', 'EC+ENGR 128', 'EC+ENGR 132A', 'EC+ENGR 133A', 'EC+ENGR 134', 'EC+ENGR 142', 'EC+ENGR M146', 'EC+ENGR M153', 'EC+ENGR 163A', 'EC+ENGR 163DA', 'EC+ENGR 164DA', 'EC+ENGR 170A', 'EC+ENGR 170C', 'EC+ENGR 173DA', 'EC+ENGR 176', 'EC+ENGR 180DB', 'EC+ENGR 183DA', 'EC+ENGR 184DA', 'EC+ENGR M185', 'EC+ENGR 188SA', 'EC+ENGR 188SC']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'GEOG'){
			agents.push(new Agent(
				'_',
				['%and', ['%and', 'GEOG 167', 'GEOG 168', 'GEOG 169', 'GEOG 166', 'GEOG 170', 'GEOG M171', 'GEOG 172'], 'GEOG 173']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'LING'){
			agents.push(new Agent(
				'_',
				['LING 103', 'LING 105', 'LING 110G', 'LING 114', 'LING M116', 'LING 120A', 'LING 127', 'LING C128B', 'LING 132', 'LING C140', 'LING 144', 'LING M150', 'LING 161', 'LING 165B', 'LING 170', 'LING M176A', 'LING M177', 'LING 180', 'LING 185B', 'LING 188SB', 'LING 189', 'LING 191A', 'LING 192A', 'LING 194', 'LING 197', 'LING 198B', 'LING 102', 'LING 104', 'LING 110', 'LING 111', 'LING 115', 'LING 119A', 'LING 120B', 'LING 120C', 'LING C128A', 'LING 130', 'LING C135', 'LING M141', 'LING M146', 'LING 160', 'LING 165A', 'LING 165C', 'LING 175', 'LING M176B', 'LING M178', 'LING 185A', 'LING 188SA', 'LING 188SC', 'LING 189HC', 'LING 191B', 'LING 192B', 'LING 195', 'LING 198A']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'MGMT'){
			agents.push(new Agent(
				'_',
				['MGMT 108', 'MGMT 120A', 'MGMT 121', 'MGMT 123', 'MGMT 126', 'MGMT 127B', 'MGMT 128', 'MGMT 140', 'MGMT 160', 'MGMT 162', 'MGMT 164', 'MGMT 167', 'MGMT 169', 'MGMT 180', 'MGMT 188SA', 'MGMT 188SC', 'MGMT 189HC', 'MGMT 199', 'MGMT 109', 'MGMT 120B', 'MGMT 122', 'MGMT 124', 'MGMT 127A', 'MGMT 127C', 'MGMT 130A', 'MGMT 142A', 'MGMT 142B', 'MGMT 161', 'MGMT 163', 'MGMT 165', 'MGMT 168', 'MGMT 170', 'MGMT 182', 'MGMT 188SB', 'MGMT 189']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'MAT+SCI'){
			agents.push(new Agent(
				'_',
				['MAT+SCI 104', 'MAT+SCI 110', 'MAT+SCI 111', 'MAT+SCI C112', 'MAT+SCI 121', 'MAT+SCI 122', 'MAT+SCI 131', 'MAT+SCI 132', 'MAT+SCI 140B', 'MAT+SCI 143A', 'MAT+SCI 150', 'MAT+SCI 160', 'MAT+SCI 161L', 'MAT+SCI CM163', 'MAT+SCI 171', 'MAT+SCI 188', 'MAT+SCI 199', 'MAT+SCI M105', 'MAT+SCI 110L', 'MAT+SCI 111L', 'MAT+SCI 120', 'MAT+SCI 121L', 'MAT+SCI 130', 'MAT+SCI 131L', 'MAT+SCI 140A', 'MAT+SCI 141L', 'MAT+SCI 143L', 'MAT+SCI 151', 'MAT+SCI 161', 'MAT+SCI 162', 'MAT+SCI 170', 'MAT+SCI CM180']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'MATH'){
			agents.push(new Agent(
				'_',
				['MATH 101', 'MATH 103B', 'MATH 105A', 'MATH 105C', 'MATH 110A', 'MATH 110B', 'MATH 110C', 'MATH 114C', 'MATH M114S', 'MATH 115AH', 'MATH 115B', 'MATH 115HX', 'MATH 117', 'MATH 120A', 'MATH 121', 'MATH 131A', 'MATH 131AX', 'MATH 131BH', 'MATH 132', 'MATH 133', 'MATH 135', 'MATH 142', 'MATH 146', 'MATH 151A', 'MATH 153', 'MATH 156', 'MATH 157X', 'MATH 167', 'MATH 170A', 'MATH 170E', 'MATH 171', 'MATH 172C', 'MATH 173B', 'MATH 175', 'MATH 178A', 'MATH 178C', 'MATH 180', 'MATH 184', 'MATH 188SB', 'MATH 189', 'MATH 190A', 'MATH 190C', 'MATH 190E', 'MATH 190G', 'MATH 190I', 'MATH 190K', 'MATH 190M', 'MATH 190O', 'MATH 191H', 'MATH 195', 'MATH 199', 'MATH 100', 'MATH 103A', 'MATH 103C', 'MATH 105B', 'MATH 106', 'MATH 110AH', 'MATH 110BH', 'MATH 111', 'MATH 114L', 'MATH 115A', 'MATH 115AX', 'MATH 115BX', 'MATH 116', 'MATH 118', 'MATH 120B', 'MATH 123', 'MATH 131AH', 'MATH 131B', 'MATH 131C', 'MATH 132H', 'MATH 134', 'MATH 136', 'MATH 143', 'MATH 149', 'MATH 151B', 'MATH 155', 'MATH 157', 'MATH 164', 'MATH 168', 'MATH 170B', 'MATH 170S', 'MATH 172B', 'MATH 173A', 'MATH 174E', 'MATH 177', 'MATH 178B', 'MATH 179', 'MATH 188SA', 'MATH 188SC', 'MATH 189HC', 'MATH 190B', 'MATH 190D', 'MATH 190F', 'MATH 190H', 'MATH 190J', 'MATH 190L', 'MATH 190N', 'MATH 191', 'MATH 192A']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

			agents[a_len].rules.push(a_not_if_b.bind(agents[a_len],['%and', 'MATH 116'],['%and', 'COM+SCI 183']));
			agents[a_len].rules.push(a_not_if_b.bind(agents[a_len],['%and', 'MATH 156'],['%and', 'COM+SCI M146']));
		}
		if (option['_'] == 'MECH&AE'){
			agents.push(new Agent(
				'_',
				['MECH&AE 102', 'MECH&AE 105A', 'MECH&AE 107', 'MECH&AE C131G', 'MECH&AE 135', 'MECH&AE C137', 'MECH&AE CM140', 'MECH&AE 150B', 'MECH&AE C150G', 'MECH&AE C150R', 'MECH&AE 154B', 'MECH&AE 155', 'MECH&AE C156B', 'MECH&AE 157A', 'MECH&AE 161B', 'MECH&AE 162A', 'MECH&AE 162E', 'MECH&AE 166C', 'MECH&AE 169A', 'MECH&AE 171B', 'MECH&AE 174', 'MECH&AE 181A', 'MECH&AE 182C', 'MECH&AE M183B', 'MECH&AE 185', 'MECH&AE C187L', 'MECH&AE 194', 'MECH&AE 101', 'MECH&AE 103', 'MECH&AE 105D', 'MECH&AE 131A', 'MECH&AE 133A', 'MECH&AE 136', 'MECH&AE C138', 'MECH&AE 150A', 'MECH&AE 150C', 'MECH&AE C150P', 'MECH&AE 154A', 'MECH&AE 154S', 'MECH&AE 156A', 'MECH&AE 157', 'MECH&AE 161A', 'MECH&AE 161C', 'MECH&AE 162D', 'MECH&AE 166A', 'MECH&AE M168', 'MECH&AE 171A', 'MECH&AE 172', 'MECH&AE C175A', 'MECH&AE 182B', 'MECH&AE 183A', 'MECH&AE C183C', 'MECH&AE C186', 'MECH&AE 188']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'MIMG'){
			agents.push(new Agent(
				'_',
				['MIMG 101', 'MIMG 103AL', 'MIMG 105', 'MIMG 107', 'MIMG 109BL', 'MIMG 123', 'MIMG C134', 'MIMG 158', 'MIMG 174', 'MIMG C185A', 'MIMG 188A', 'MIMG 188SA', 'MIMG 188SC', 'MIMG 189HC', 'MIMG 192', 'MIMG 193B', 'MIMG 194B', 'MIMG 196B', 'MIMG 198A', 'MIMG 198C', 'MIMG 100L', 'MIMG 102', 'MIMG 103BL', 'MIMG 106', 'MIMG 109AL', 'MIMG C122', 'MIMG 132', 'MIMG CM156', 'MIMG 168', 'MIMG 180A', 'MIMG 180B', 'MIMG C185B', 'MIMG 188B', 'MIMG 188SB', 'MIMG 189', 'MIMG 191H', 'MIMG 193A', 'MIMG 194A', 'MIMG 196A', 'MIMG 197', 'MIMG 198B']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'MCD+BIO'){
			agents.push(new Agent(
				'_',
				['MCD+BIO 100', 'MCD+BIO 104BL', 'MCD+BIO M140', 'MCD+BIO 143', 'MCD+BIO 146', 'MCD+BIO 150AL', 'MCD+BIO CM156', 'MCD+BIO 165A', 'MCD+BIO 168', 'MCD+BIO 172', 'MCD+BIO C174B', 'MCD+BIO M175A', 'MCD+BIO M175C', 'MCD+BIO 180B', 'MCD+BIO 187AL', 'MCD+BIO 188SA', 'MCD+BIO 188SC', 'MCD+BIO 189HC', 'MCD+BIO 192A', 'MCD+BIO 193', 'MCD+BIO 194B', 'MCD+BIO 196B', 'MCD+BIO 198B', 'MCD+BIO 198D', 'MCD+BIO 199A', 'MCD+BIO 199C', 'MCD+BIO 104AL', 'MCD+BIO 138', 'MCD+BIO C141', 'MCD+BIO 144', 'MCD+BIO C150', 'MCD+BIO 155', 'MCD+BIO 160', 'MCD+BIO 165B', 'MCD+BIO M170', 'MCD+BIO C174A', 'MCD+BIO C174D', 'MCD+BIO M175B', 'MCD+BIO 180A', 'MCD+BIO M181', 'MCD+BIO 188', 'MCD+BIO 188SB', 'MCD+BIO 189', 'MCD+BIO 191', 'MCD+BIO 192B', 'MCD+BIO 194A', 'MCD+BIO 196A', 'MCD+BIO 198A', 'MCD+BIO 198C', 'MCD+BIO 199', 'MCD+BIO 199B']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'PHYSICS'){
			agents.push(new Agent(
				'_',
				['PHYSICS 105A', 'PHYSICS 108', 'PHYSICS 110B', 'PHYSICS 114', 'PHYSICS 115B', 'PHYSICS 117', 'PHYSICS M122', 'PHYSICS 124', 'PHYSICS 127', 'PHYSICS 131', 'PHYSICS 140A', 'PHYSICS 144', 'PHYSICS 180A', 'PHYSICS 180D', 'PHYSICS 180F', 'PHYSICS 180N', 'PHYSICS C186', 'PHYSICS C187B', 'PHYSICS 188L', 'PHYSICS 188SB', 'PHYSICS 189', 'PHYSICS 190', 'PHYSICS 192', 'PHYSICS 192S', 'PHYSICS 194', 'PHYSICS 197', 'PHYSICS 199', 'PHYSICS 105B', 'PHYSICS 110A', 'PHYSICS 112', 'PHYSICS 115A', 'PHYSICS 115C', 'PHYSICS 118', 'PHYSICS 123', 'PHYSICS 126', 'PHYSICS 128', 'PHYSICS 132', 'PHYSICS 140B', 'PHYSICS 150', 'PHYSICS 180C', 'PHYSICS 180E', 'PHYSICS M180G', 'PHYSICS 180Q', 'PHYSICS C187A', 'PHYSICS 188', 'PHYSICS 188SA', 'PHYSICS 188SC', 'PHYSICS 189HC', 'PHYSICS 191', 'PHYSICS 192M', 'PHYSICS 193', 'PHYSICS 196']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
		if (option['_'] == 'STATS'){
			agents.push(new Agent(
				'_',
				['STATS 100B', 'STATS 101A', 'STATS 101C', 'STATS 102B', 'STATS 105', 'STATS 115', 'STATS 130', 'STATS 140SL', 'STATS 143', 'STATS 147', 'STATS M154', 'STATS 157', 'STATS 170', 'STATS M171', 'STATS C180', 'STATS C183', 'STATS 186', 'STATS 188SB', 'STATS 189', 'STATS 195', 'STATS 100A', 'STATS 100C', 'STATS 101B', 'STATS 102A', 'STATS 102C', 'STATS 131', 'STATS 141SL', 'STATS C145', 'STATS C151', 'STATS C155', 'STATS C161', 'STATS C173', 'STATS 175', 'STATS 182', 'STATS 184', 'STATS 188SA', 'STATS 188SC', 'STATS 189HC']
				)
			);

			a_len = agents.length-1;
			agents[a_len].chk = check.bind(agents[a_len], );
			agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

		}
	}
	if (option['major_6'] == '4'){
		agents.push(new Agent(
			'major_6',
			['%and', 'CHEM 20A', 'CHEM 20B', 'CHEM 30A', ['%or?one', 'LIFESCI 3', 'LIFESCI 7A']]
			)
		);

		a_len = agents.length-1;
		agents[a_len].chk = check.bind(agents[a_len], );
		agents[a_len].upd = finish.bind(agents[a_len], 3, 12, );

	}
}