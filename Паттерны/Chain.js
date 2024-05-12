class LeaveRequest {
  constructor(leaveDays) {
    this.leaveDays = leaveDays;
  }
}

class Approver {
  constructor(nextApprover) {
    this.nextApprover = nextApprover;
  }

  approve(request) {
    if (this.canApprove(request)) {
      console.log(
        `${this.constructor.name} одобрил отпуск на ${request.leaveDays} дней.`
      );
    } else if (this.nextApprover) {
      this.nextApprover.approve(request);
    } else {
      console.log(
        `Запрос на отпуск на ${request.leaveDays} дней не может быть одобрен.`
      );
    }
  }

  canApprove(request) {
    return false;
  }
}

class Supervisor extends Approver {
  canApprove(request) {
    return request.leaveDays <= 5;
  }
}

class Manager extends Approver {
  canApprove(request) {
    return request.leaveDays <= 10;
  }
}

class Director extends Approver {
  canApprove(request) {
    return request.leaveDays > 10;
  }
}

const days = new LeaveRequest(11);
const director = new Director(null);
const manager = new Manager(director);
const supervisor = new Supervisor(manager);

supervisor.approve(days);
